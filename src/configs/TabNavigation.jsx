import { View, Text,Image } from 'react-native'
import React from 'react'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../screens/Home"
import Favourite from '../screens/Favourite'
import Orders from '../screens/Orders'
import AddShoe from '../screens/AddShoe'
import Setting from '../screens/Setting'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5  from "react-native-vector-icons/FontAwesome5"
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import Feather from "react-native-vector-icons/Feather"
import MaterialCoomunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();
export default function TabNavigation({route}) {
  const data=route?.params?.data
  return (
    <Tab.Navigator
    initialRouteName={"homescreen2"}
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.lightblack,
      headerShown: false,
      tabBarStyle: {
        paddingVertical:10,
        backgroundColor: colors.white,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        minHeight:50,
        paddingVertical:RFPercentage(2)
         }
    })}
  >
    <Tab.Screen
      name={"homescreen2"}
      options={{
        tabBarShowLabel: false,
        tabBarIcon:({color,size,focused})=>
        (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
      {
        // focused?
        // <Image style={{height:35,width:35}} source={require("../../assets/images/activemain.png")}/>
        // :
        <Image style={{height:35,width:35}} source={require("../../assets/images/headercustom.png")}/>
      }
        </View>
        )
        }}
      
    >
      {
        ()=><Home data={data}/>
      }
      </Tab.Screen>
 <Tab.Screen
      name={"favscreen"}
      options={{
        tabBarShowLabel: false,
        tabBarIcon:({color,size})=>
        (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
          <AntDesign name="hearto" size={size} color={color} />
        </View>
        )
        }}
      
    >
       {
        ()=><Favourite data={data}/>
      }
      </Tab.Screen>
    <Tab.Screen
      name={"ordersscreen"}
      options={{
        tabBarShowLabel: false,
        tabBarIcon:({color,size})=>
        (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
          <FontAwesome5 name="shipping-fast" size={size} color={color} />
        </View>
        )
        }}
      
    >
       {
        ()=><Orders data={data}/>
      }
      </Tab.Screen>
    <Tab.Screen
      name={"settingscreen"}
      options={{
        tabBarShowLabel: false,
        tabBarIcon:({color,size})=>
        (<View style={{display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(.5),marginBottom:5}}>
          <AntDesign name="setting" size={size} color={color} />
        </View>
        )
        }}
      
    >
       {
        ()=><Setting data={data}/>
      }
      </Tab.Screen>
  </Tab.Navigator>
  )
}