
from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS, cross_origin
from urllib import response
from tinydb import TinyDB, Query
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# create db.json file for storing geofence data
db = TinyDB('DesoDB.json')

# create tables with specific name and initialize them
MarketplaceTable = db.table('Marketplace')
UserTable = db.table('Users')
ListingTable = db.table('Listings')

# create an instance of Query class that can help us search the database
query = Query()


''' Helper methods '''
def is_empty(result):
    return True if len(result)==0 else False

''' USE CASES
- Listing
- Submit Post / create NFT / may include upload file
- networking b/w users
- wallet + user profile
- Buying/Purchase
- MintNFT

'''

''' ENDPOINTS:
    *** Priorities ***
    - GET - MarketplaceTable (for Home.js) - return an array of marketplace objects ---> map it out
    - POST - MarketplaceTable (for NewListing.js) - submit an object ---> append to the array of marketplace
    - GET - ListingTable (for Listing.js) - return an array of all NFT objects that that has same USER-ID
    - POST - ListingTable (for Buy.js) - user buy an item ---> object append onto ListingTable with specific USER-ID

    * Bonuses *
    - GET - user info (Account Screen) - return an objects with all info of the user
    - POST - user info (Account Screen) - then update accordingly
    - Update - user info (Account Screen) -
    -

'''
@app.route("/")
def test():
    print('Backend Database is running')
    return "Hello, this is Deso Simple Backend Database"


@app.route('/api/marketplace', methods=['POST'])
def post_marketplace():
    response_object = {'status': 'success'}
    if request.method == 'POST':
        nftPost = request.get_json(force=True)
        # MarketplaceTable.truncate()
        # MarketplaceTable.insert(nftPost)
        ''' MarketplaceTable is empty --> insert the whole thing'''
        cur = MarketplaceTable.all()
        if is_empty(cur):
            MarketplaceTable.insert(nftPost)
        else:
            print(cur[0]['marketplace'])
            cur[0]['marketplace'].append(nftPost)
            MarketplaceTable.truncate()
            MarketplaceTable.insert(cur[0])
        response_object['message'] = 'data added!'
    return jsonify(response_object)

@app.route('/api/marketplace', methods=['GET'])
def get_marketplace():
    result = MarketplaceTable.all()
    return jsonify(result[0]['marketplace']) if not is_empty(result) else jsonify([])

@app.route('/api/marketplace', methods=['DELETE'])
def remove_marketplace():
    MarketplaceTable.truncate()
    return "DELETE SUCCESS"

@app.route('/api/user', methods=['POST'])
def post_user():
    response_object = {'status': 'success'}
    if request.method == 'POST':
        userData = request.get_json(force=True)
        search_user = UserTable.get(query.publicKeyBase58Check == userData['publicKeyBase58Check'])
        if search_user == None:
            UserTable.insert(userData)
        else:
            UserTable.upsert(userData, query.publicKeyBase58Check == userData['publicKeyBase58Check'])
        response_object['message'] = 'data added!'
    return jsonify(response_object)


@app.route('/api/user/<user_id>', methods=['GET'])
def get_user(user_id):
    '''if user_id exist use'''
    result={}
    if request.method == 'GET':
        result=UserTable.search(query.publicKeyBase58Check == user_id)
    return jsonify({}) if is_empty(result) else jsonify(result[0])


####### Uncommend to completely remove all tables and run again
# db.drop_table('Marketplace')
####### Uncomment below to empty out all tablesand run again
# MACTable.truncate()


# the host value allows traffic from anywhere to run this
app.run(host = "0.0.0.0")
