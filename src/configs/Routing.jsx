import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import ShoeDetail from '../screens/ShoeDetail';
import TabNavigation from './TabNavigation';
import PlaceOrder from '../screens/PlaceOrder';
import Chat from '../screens/Chat';
import Payment from '../screens/Payment';
import AddPayment from '../screens/AddPayment';
import AddShoe from '../screens/AddShoe';
import HomeScreen from '../screens/HomeScreen';
import StartScreen from '../screens/StartScreen';
const Stack = createNativeStackNavigator();
import { useDispatch, useSelector } from 'react-redux';
import { fetchuserdata } from '../store/auth/authSlice';
export default function Routing() {
    const dispatch=useDispatch()
    const { isLoggedIn, user, profile } = useSelector((state) => state.user);
    React.useEffect(()=>{
      dispatch(fetchuserdata())
    },[])
  return (
        <Stack.Navigator initialRouteName={isLoggedIn&&user?"homescreen":"signup"} screenOptions={{headerShown:false}}>
       {
        isLoggedIn&&user?
       <>
        <Stack.Screen name={"homescreen"} component={StartScreen}/>
        <Stack.Screen name={"startscreen"} component={HomeScreen}/>
        <Stack.Screen name={"additem"} component={AddShoe}/>
        <Stack.Screen name={"payment"} component={Payment}/>        
        <Stack.Screen name={"home"} component={TabNavigation}/>
        <Stack.Screen name={"details"} component={ShoeDetail}/>
        <Stack.Screen name={"placeorder"} component={PlaceOrder}/>
        <Stack.Screen name={"chat"} component={Chat}/>
        <Stack.Screen name={"addpayment"} component={AddPayment}/>
        </>
        :
        <>
        <Stack.Screen name={"signup"} component={Signup}/>
        <Stack.Screen name={"login"} component={Login}/>
        <Stack.Screen name={"forgot"} component={Forgot}/>
       </>
       
       }
        </Stack.Navigator>
  )
}