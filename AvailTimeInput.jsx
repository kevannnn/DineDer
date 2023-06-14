import { useState } from 'react';
import { View, Button, Text, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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
    <View>
      <Button onPress={showDatepicker} title="Choose Available Date" />
      <Button onPress={showTimepicker} title="Choose Available Time" />
      <Text style={styles.textContainer}>Current Availability: {date.toLocaleString()}</Text>
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
      <Button onPress={handleProfiles} title="Find a Meal Buddy!" />
    </View>
  );
};

const styles = StyleSheet.create ({
  textContainer: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 50
  },
});

export default AvailTimeInput;


