import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState("");
  const [lower, setLower] = useState(null);
  const [upper, setUpper] = useState(null);

  const calculate = () => {
    const ageparsed = parseInt(age);
      const lowerLimit = (220 - ageparsed) * 0.65;
      const upperLimit = (220 - ageparsed) * 0.85;
      setLower(lowerLimit.toFixed(2));
      setUpper(upperLimit.toFixed(2));
  
      
  };
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput placeholder="Enter your age"
        onChangeText={setAge}
        value={age} 
        //inputMode="numeric"
        />
      <Text>Heart rate limits</Text>
      <Text>{lower} - {upper}</Text>
      <Button title="Calculate" color="blue" onPress={calculate}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
