import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useLanguage } from '../../../utils/LanguageService';

const BackButton = () => {
  const navigation = useNavigation();
  const { translations } = useLanguage();

  const handlePress = () => {
    navigation.navigate('Home')
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{translations.back}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    padding: 20,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  text: {
    color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
  },
});

export default BackButton;
