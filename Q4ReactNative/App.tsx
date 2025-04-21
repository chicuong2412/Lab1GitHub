/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView} from 'react-native';

import Square from './Square';
import data from './data';
import style from './style';

function App() {
  return (
    <ScrollView style={style.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}

export default App;
