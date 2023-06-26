import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ProfileScreens from './screens/ProfileScreens';
import OwnGender from './screens/OwnGender';
import MealPreference from './screens/MealPreference';
import AvailTimeInput from './screens/AvailTimeInput';
import Faculty from './screens/Faculty';
import ProfilesListPage from './ProfilesListPage';
import PreferredGender from './screens/PreferredGender';

const screens = {
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  ProfileScreens: {
    screen: ProfileScreens,
  },
  OwnGender: {
    screen: OwnGender,
  },
  MealPreference: {
    screen: MealPreference,
  },
  AvailTimeInput: {
    screen: AvailTimeInput,
  },
  Faculty: {
    screen: Faculty,
  },
  PreferredGender: {
    screen: PreferredGender,
  },
  ProfilesListPage: {
    screen: ProfilesListPage,
  },
};

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);

