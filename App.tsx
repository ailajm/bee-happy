// Imports
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Affirmations} from './Affirmation';

const App = () => {
  // Test affirmations
  const affirmations: string[] = Affirmations;

  // State
  const [currentAffirmation, setCurrentAffirmation] = useState<string>('');

  // Function to fetch a new affirmation
  const getNewAffirmation = (): void => {
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
