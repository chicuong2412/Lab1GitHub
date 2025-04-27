import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function HailstoneSequence() {
  const [number, setNumber] = useState('');
  const [list, setList] = useState<number[]>([]);

  const generateHailstoneSequence = () => {
    let n = parseInt(number);
    if (isNaN(n) || n <= 0) {
      alert('Please enter a positive number!');
      return;
    }

    const result = [];
    while (n !== 1) {
      result.push(n);
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }
    result.push(1);
    setList(result);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter a positive number"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Generate Sequence" onPress={generateHailstoneSequence} />
      <ScrollView style={styles.sequenceContainer}>
        {list.map((num, index) => (
          <Text key={index} style={styles.item}>
            {num}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
  sequenceContainer: {
    marginTop: 20,
  },
  item: {
    fontSize: 14,
    marginBottom: 5,
  },
});
