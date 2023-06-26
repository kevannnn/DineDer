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

const OwnGender = ({navigation}) => {
  const [ownGender, setOwnGender] = useState('');
  const [isButtonSelected, setIsButtonSelected] = useState(false);

  const handleSelection = preference => {
    setOwnGender(preference);
    setIsButtonSelected(true);
  };

  return (
    <View style={styles.container}>
        <PageLogo resizeMode = "contain" source={require('./../assets/gender.png')} />
        <Text style={styles.title}>Your Gender</Text>
        <TouchableOpacity
            style={[styles.optionButton, ownGender === 'Male' && styles.selectedButton]}
            onPress={() => handleSelection('Male')}
        >
            <Text style={styles.optionText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.optionButton, ownGender === 'Female' && styles.selectedButton]}
            onPress={() => handleSelection('Female')}
        >
            <Text style={styles.optionText}>Female</Text>
        </TouchableOpacity>
        <Text style={styles.resultText}>
            Your Gender: {ownGender || 'None selected'}
        </Text>
        <NextButton onPress = {() => navigation.navigate('PreferredGender')}>
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

export default OwnGender;
