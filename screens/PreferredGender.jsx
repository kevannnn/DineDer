import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraText,
    Extraview,
    TextLink,
    TextLinkContent,
    NextButton
} from '../components/styles'

const {brand, darkLight, tertiary} = Colors;

const PreferredGender = ({navigation}) => {
  const [preferredGender, setPreferredGender] = useState('');
  const [isButtonSelected, setIsButtonSelected] = useState(false);

  const handleSelection = preference => {
    setPreferredGender(preference);
    setIsButtonSelected(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferred Buddy's Gender</Text>
      <TouchableOpacity
        style={[styles.optionButton, preferredGender === 'Male' && styles.selectedButton]}
        onPress={() => handleSelection('Male')}
      >
        <Text style={styles.optionText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, preferredGender === 'Female' && styles.selectedButton]}
        onPress={() => handleSelection('Female')}
      >
        <Text style={styles.optionText}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, preferredGender === 'No Preference' && styles.selectedButton]}
        onPress={() => handleSelection('No Preference')}
      >
        <Text style={styles.optionText}>No Preference</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>
        Preferred Buddy's Gender: {preferredGender || 'None selected'}
      </Text>
      <NextButton onPress = {() => navigation.navigate('Faculty')}>
        <ButtonText>Next</ButtonText>
        </NextButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#eaeaea',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
    //justifyContent: 'center',
    width: '70%'
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 18,
    marginTop: 20,
  },
  selectedButton: {
    backgroundColor: 'rosybrown',
  },
});

export default PreferredGender;
