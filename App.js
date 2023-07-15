import React  from "react";
import Dashboard from './Screens/Dashboard';
import Information from './Screens/Information';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();





const App = () => {
  return(
   
  <Tab.Navigator>
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="Information" component={Information} />
  </Tab.Navigator>
  
  )
}









export default App