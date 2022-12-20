
const sha256 = require('sha256');
const EC = require('elliptic').ec;
const ec = new EC("secp256k1");
const axios = require('axios');

/*
 Backend API endpoints
 */
const api = "https://node.deso.org";
const apiAuthorize = "/api/v0/authorize-derived-key";
const apiSubmit = "/api/v0/submit-transaction";


/*
 Payload from DeSo Identity after using the /derive window API endpoint
 */

// Access signature is a certificate signed by the master public key3044022030e9dfa8915850d7a5656c56825ed94d31d5b1d3a87e048e878d7a8d62209153022049ac7
const accessSignature = "fbf25da9f7bb8bff25d0969c5a426eb4921cf588980ea883ce1946a4957";
// Private key of the derived key
const derivedSeedHex = "7af101c568ddd395086225fac9acf232338d4aa12c94ff984e007b45458cb63a";
// Public key of the derived key
const derivedPublicKey = "BC1YLim4Ym534Nojd7CHYTPRBVM4GcFtyQqHKTHXDpBFpHYVG1L88aq";
// Master public key
const publicKey = "BC1YLjL7iWeo7gGmyc9PCevqUF7AUdpSY7mJgz6V1uTJQLmpNRPBtWJ";
// When the derived key expires
const expirationBlock = 14423;

/*
 Authorize a derived key logic
 */

// authorizeDerivedKey();
async function authorizeDerivedKey() {
    // Step 1. Construct an authorize transaction by sending a request to `/api/v0/authorize-derived-key`
    let payload =  {
        OwnerPublicKeyBase58Check: publicKey,
        DerivedPublicKeyBase58Check: derivedPublicKey,
        ExpirationBlock: expirationBlock,
        AccessSignature: accessSignature,
        DeleteKey: false,
        DerivedKeySignature: true,
        MinFeeRateNanosPerKB: 1000
    }
    let res = await axios.post(api + apiAuthorize, payload);
    const transactionHex = res.data.TransactionHex;

    // Step 2. Sign transaction with derived seed hex
    const signedTransaction = signTransaction(derivedSeedHex, transactionHex);

    // Step 3. Submit the transaction
    payload = {
        TransactionHex : signedTransaction
    }
    res = await axios.post(api + apiSubmit, payload)
    console.log(res);
}



/*
 Helper functions
 */

// Serialize a number into an 8-byte array. This is a copy/paste primitive, not worth
// getting into the details.
function uvarint64ToBuf (uint) {
    const result = [];

    while (uint >= 0x80) {
        result.push((uint & 0xFF) | 0x80);
        uint >>>= 7;
    }

    result.push(uint | 0);

    return new Buffer(result);
}

// Sign transaction with seed
function signTransaction (seed, txnHex) {
    const privateKey = ec.keyFromPrivate(seed);
    const transactionBytes = new Buffer(txnHex, 'hex');
    const transactionHash = new Buffer(sha256.x2(transactionBytes), 'hex');
    const signature = privateKey.sign(transactionHash);
    const signatureBytes = new Buffer(signature.toDER());
    const signatureLength = uvarint64ToBuf(signatureBytes.length);
    const signedTransactionBytes = Buffer.concat([
        transactionBytes.slice(0, -1),
        signatureLength,
        signatureBytes
    ])
    return signedTransactionBytes.toString('hex');
}
// console.log(signTransaction(derivedSeedHex,"01205217fe67f56527c55d73d8b3f0d05a5e0029f07199b19e805c9b8bddbe0125000103e1edf9d158af48de6a4e446f0f5d7d2ab1b52454e931401b5c6171d44f9adc6ca7aae204052a0000197b22426f6479223a226465726963206973207369636b2e227de807d461bcfbf791baf7e9f616002103e1edf9d158af48de6a4e446f0f5d7d2ab1b52454e931401b5c6171d44f9adc6c0000"));

export default signTransaction;
