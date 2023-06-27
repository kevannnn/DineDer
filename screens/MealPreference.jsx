import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

const MealPreference = ({navigation}) => {
  const [mealPreference, setMealPreference] = useState('');
  const [isButtonSelected, setIsButtonSelected] = useState(false);

  const handleSelection = preference => {
    setMealPreference(preference);
    setIsButtonSelected(true);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <PageLogo resizeMode = "contain" source={require('./../assets/foodlogo.png')} />
      <Text style={styles.title}>Meal Preference </Text>
      <TouchableOpacity
        style={[styles.optionButton, mealPreference === 'Vegetarian' && styles.selectedButton]}
        onPress={() => handleSelection('Vegetarian')}
      >
        <Text style={styles.optionText}>Vegetarian</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, mealPreference === 'Western' && styles.selectedButton]}
        onPress={() => handleSelection('Western')}
      >
        <Text style={styles.optionText}>Western</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, mealPreference === 'Malay' && styles.selectedButton]}
        onPress={() => handleSelection('Malay')}
      >
        <Text style={styles.optionText}>Malay</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, mealPreference === 'Japanese' && styles.selectedButton]}
        onPress={() => handleSelection('Japanese')}
      >
        <Text style={styles.optionText}>Japanese</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, mealPreference === 'Korean' && styles.selectedButton]}
        onPress={() => handleSelection('Korean')}
      >
        <Text style={styles.optionText}>Korean</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, mealPreference === 'Chinese' && styles.selectedButton]}
        onPress={() => handleSelection('Chinese')}
        //activeOpacity={0.7}
      >
        <Text style={styles.optionText}>Chinese</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, mealPreference === 'Indian' && styles.selectedButton]}
        onPress={() => handleSelection('Indian')}
      >
        <Text style={styles.optionText}>Indian</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>
        Your meal preference : {mealPreference || 'No preference selected'}
      </Text>
      <NextButton onPress = {() => navigation.navigate('AvailTimeInput')}>
        <ButtonText>Next</ButtonText>
        </NextButton>
    </View>
    </ScrollView>
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

export default MealPreference;
