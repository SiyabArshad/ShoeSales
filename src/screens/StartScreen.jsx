import { View, Text,StyleSheet,TextInput,TouchableOpacity,Pressable, ScrollView,Dimensions,ActivityIndicator } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import Screen from "../components/Screen"
import Entypo from "react-native-vector-icons/Entypo"
import { Avatar,Image } from 'react-native-elements'
import ShoeCard from '../components/ShoeCard';
import BodyText from '../components/Typography/BodyText';
import Heading from '../components/Typography/Heading';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from "react-native-picker-select";
import { SelectList } from 'react-native-dropdown-select-list'
import DropDownMenu from '../components/DropDownMenu';
import CustomButton from "../components/CustomButton"
import { useRoute,useNavigation } from '@react-navigation/native';
export default function StartScreen({route}) {
    const navigation=useNavigation()
    const [csstatus,setcsstatus]=React.useState(false)

  return (
    <Screen>
    <View style={{flex:1,marginHorizontal:rp(2),marginVertical:rp(2)}}>
      <BodyText text={"Welcome Jhones"} h='h2' style={{marginBottom:rp(2),marginTop:rp(1)}}/>
      <Heading h='h1' text={"What You want to buy today?"} style={{fontSize:rp(6),width:"90%",marginVertical:rp(2)}} />
        <View style={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:"center",marginVertical:rp(2)}}>
            <TouchableOpacity onPress={()=>navigation.navigate("startscreen",{data:false})} style={{backgroundColor:colors.black,paddingHorizontal:rp(3),paddingVertical:rp(1),borderRadius:rp(.5)}}>
                <BodyText text={"Buy"} color={colors.white}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("startscreen",{data:true})} style={{marginLeft:rp(1),backgroundColor:colors.black,paddingHorizontal:rp(3),paddingVertical:rp(1),borderRadius:rp(.5)}}>
                <BodyText text={"Sell"} color={colors.white}/>
                </TouchableOpacity>
        </View>
    </View>
    </Screen>
  )
}

const styles=StyleSheet.create({

})