import { View } from 'react-native';
import ProfileList from './ProfilesList';
import profiles from './Profiles';

export default function ProfilesListPage({navigation}) {

  const availProfiles = profiles.filter(
    (profile) => profile.userAvailTime.getTime() === navigation.getParam('time').getTime()
  );

  return (
    <View style={{ flex: 1 }}>
        <ProfileList profiles={availProfiles} />
    </View>
  );
};