import React, {useState} from 'react';
import {Slider, Text, StyleSheet, View, TextInput} from 'react-native';
import { COLORS } from '../constants';

const SliderDemo = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Post Title" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Creator Name"
          style={styles.inputStyle}
        />
        <Text style={{marginTop: 16, color: '#fff', fontSize: 15}}>
          Price from low to high
        </Text>
        <Slider
          style={{marginTop: 20}}
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={slideValue => setValue(slideValue)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
        />
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Slide value: {value}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default SliderDemo;