// Imports
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // test affirmations
  const affirmations = [
    "I am strong.",
    "I am capable.",
    "I am worthy of success.",
    "I am worthy of happiness.",
    "I am becomming the best version of myself.",
    "I belive in my ability to overcome challenges.",
    "I am grateful for the positive things in my life."
  ];

  // State
  const [currentAffirmation, setCurrentAffirmation] = useState('');

  // Fetch affirmation
  const getNewAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  // New affirmation on app open
  useEffect(() => {
    getNewAffirmation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.affirmationText}>{currentAffirmation}</Text>
      <Button title="New Affirmation" onPress={getNewAffirmation} />
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
  affirmationText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
