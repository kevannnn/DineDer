import { View, Text, FlatList, Image, StyleSheet, Button, Alert } from 'react-native';

const RenderItem = ({item}) => (
  <View style={styles.profileContainer}>
    <Image source={{ uri: item.userPicture }} style={styles.userPicture} />
    <Text style={styles.username}>{item.username}</Text>
    <Text style={styles.userAge}>Age: {item.userAge}</Text>
    <Text style={styles.userFaculty}>Faculty: {item.userFaculty}</Text>
    <Text style={styles.userFavCuisine}>Favourite Cuisine: {item.userFavCuisine}</Text>
    <Text style={styles.userAvailTimeDisp}>Available Time: {item.userAvailTimeDisp}</Text>
    <Text style={styles.userBio}>{item.userBio}</Text>
    <View style={styles.chooseButtons}>
      <Button
      title="Next Time..."
      //colour=
      onPress={() => Alert.alert('Next Time...')}     
      />
      <Button
        title="Let's Dine!"
        onPress={() => Alert.alert('Lets Dine!')}
      />
    </View>
  </View>
);


const ProfileList = ({profiles}) => (
  <FlatList
    data={profiles}
    renderItem={RenderItem}
    keyExtractor={item => item.username}
    style={styles.container}
    />
);

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      marginTop: 20,
    },
    profileContainer: {
      alignItems: 'left',
      padding: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    userPicture: {
      width: 330,
      height: 500,
      marginRight: 10,
    },
    username: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    userAge: {
        fontSize: 16,
      },
    userFaculty: {
      fontSize: 16,
    },
    userFavCuisine: {
        fontSize: 16,
    },
    userAvailTimeDisp: {
        fontSize: 16,
    },

    userBio: {
        fontSize: 13,
    },

    chooseButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 5,
        marginTop: 20,
      },
});

export default ProfileList;
