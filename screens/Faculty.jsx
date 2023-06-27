import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

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

const Faculty = ({navigation}) => {
  const [faculty, setFaculty] = useState('');
  const [isButtonSelected, setIsButtonSelected] = useState(false);

  const handleSelection = preference => {
    setFaculty(preference);
    setIsButtonSelected(true);
  };

  return (
    <View style={styles.container}>
      <PageLogo resizeMode = "contain" source={require('./../assets/facultynew.png')} />
      <Text style={styles.title}>Your Faculty</Text>
      <TouchableOpacity
        style={[styles.optionButton, faculty === 'Business' && styles.selectedButton]}
        onPress={() => handleSelection('Business')}
      >
        <Text style={styles.optionText}>Business</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, faculty === 'Computing' && styles.selectedButton]}
        onPress={() => handleSelection('Computing')}
      >
        <Text style={styles.optionText}>Computing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, faculty === 'Engineering' && styles.selectedButton]}
        onPress={() => handleSelection('Engineering')}
      >
        <Text style={styles.optionText}>Engineering</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, faculty === 'FASS' && styles.selectedButton]}
        onPress={() => handleSelection('FASS')}
      >
        <Text style={styles.optionText}>FASS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, faculty === 'Law' && styles.selectedButton]}
        onPress={() => handleSelection('Law')}
      >
        <Text style={styles.optionText}>Law</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, faculty === 'Science' && styles.selectedButton]}
        onPress={() => handleSelection('Science')}
        //activeOpacity={0.7}
      >
        <Text style={styles.optionText}>Science</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>
        Your Faculty: {faculty || 'None selected'}
      </Text>
      <NextButton onPress = {() => navigation.navigate('AvailTimeInput')}>
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

export default Faculty;
