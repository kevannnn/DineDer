import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import AvailTimeInput from './AvailTimeInput';
import ProfilesListPage from './ProfilesListPage';

const screens = {
  Login: {
    screen: Login,
  },
  AvailTimeInput: {
    screen: AvailTimeInput,
  },
  ProfilesListPage: {
    screen: ProfilesListPage,
  },
};

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);

