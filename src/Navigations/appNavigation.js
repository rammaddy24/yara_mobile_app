import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from  '../Screens/Auth/Containers/main';


export const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login :{
    screen: LoginScreen,
  }
});
