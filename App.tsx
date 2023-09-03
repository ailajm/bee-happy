// Imports
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  // Test affirmations
  const affirmations: string[] = [
    "I am strong.",
    "I am capable.",
    "I am worthy of success.",
    "I am worthy of happiness.",
    "I am becoming the best version of myself.",
    "I believe in my ability to overcome challenges.",
    "I am grateful for the positive things in my life."
  ];

  // State
  const [currentAffirmation, setCurrentAffirmation] = useState<string>('');

  // Function to fetch a new affirmation
  const getNewAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.affirmationText}>{currentAffirmation}</Text>
      <Button title="New Affirmation" onPress={getNewAffirmation} />
    </View>
  );
};

// Styles
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

// Export
export default App;
