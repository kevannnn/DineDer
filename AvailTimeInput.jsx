import { useState } from 'react';
import { View, Button, Text, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
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

const AvailTimeInput = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); 
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleProfiles = () => {
    navigation.navigate('ProfilesListPage', { time: date });
  };

  return (
    <View style={styles.container}>
      <PageLogo resizeMode = "contain" source={require('./../assets/clock.png')} />
      <Text style={styles.title}>Availability</Text>
      <NextButton onPress={showDatepicker}>
        <ButtonText>Choose Available Date</ButtonText> 
        </NextButton>
      <NextButton onPress={showTimepicker}>
        <ButtonText>Choose Available Time</ButtonText> 
        </NextButton>
      <Text style={styles.textContainer}>Selected Availability: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <NextButton onPress={handleProfiles} >
        <ButtonText>Find a Meal Buddy</ButtonText> 
        </NextButton>
    </View>
  );
};

const styles = StyleSheet.create ({
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
  textContainer: {
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 50
  },
});

export default AvailTimeInput;


