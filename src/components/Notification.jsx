import { View, Text,Pressable,ActivityIndicator ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Heading from "./Typography/Heading"
import BodyText from "./Typography/BodyText"
import { Image } from 'react-native-elements';

export default function Notification() {
  return (
    <View style={{marginTop:rp(1)}}>
      <View style={{backgroundColor:colors.lightgrey,paddingHorizontal:rp(2),paddingVertical:rp(1.5),borderRadius:rp(1),marginBottom:rp(1.5)}}>
        <BodyText size='m' style={{marginBottom:rp(1)}} text={"@williams is selling Nike Air Jorden"}/>
       <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
       <TouchableOpacity style={{backgroundColor:colors.green,paddingHorizontal:rp(2),paddingVertical:rp(.8),borderRadius:rp(3)}}>
            <BodyText size='m' color={colors.white} text={"Go to Product"}/>
        </TouchableOpacity>
       </View>
       
      </View>
      <View style={{backgroundColor:colors.lightgrey,paddingHorizontal:rp(2),paddingVertical:rp(1.5),borderRadius:rp(1),marginBottom:rp(1.5)}}>
        <BodyText size='m' style={{marginBottom:rp(1)}} text={"@Jones is Asking for Nike Air Jorden is Available"}/>
       <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
       <TouchableOpacity style={{backgroundColor:colors.green,paddingHorizontal:rp(2),paddingVertical:rp(.8),borderRadius:rp(3)}}>
            <BodyText size='m' color={colors.white} text={"Yes"}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:rp(1),backgroundColor:colors.danger,paddingHorizontal:rp(2),paddingVertical:rp(.8),borderRadius:rp(3)}}>
            <BodyText size='m' color={colors.white} text={"No"}/>
        </TouchableOpacity>
       </View>
       
      </View>
      <View style={{backgroundColor:colors.lightgrey,paddingHorizontal:rp(2),paddingVertical:rp(1.5),borderRadius:rp(1),marginBottom:rp(1.5)}}>
        <BodyText size='m' style={{marginBottom:rp(1)}} text={"@williams is selling Nike Air Jorden"}/>
       <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
       <TouchableOpacity style={{backgroundColor:colors.green,paddingHorizontal:rp(2),paddingVertical:rp(.8),borderRadius:rp(3)}}>
            <BodyText size='m' color={colors.white} text={"Go to Product"}/>
        </TouchableOpacity>
       </View>
       
      </View>
      <View style={{backgroundColor:colors.lightgrey,paddingHorizontal:rp(2),paddingVertical:rp(1.5),borderRadius:rp(1),marginBottom:rp(1.5)}}>
        <BodyText size='m' style={{marginBottom:rp(1)}} text={"@Jones is Asking for Nike Air Jorden is Available"}/>
       <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
       <TouchableOpacity style={{backgroundColor:colors.green,paddingHorizontal:rp(2),paddingVertical:rp(.8),borderRadius:rp(3)}}>
            <BodyText size='m' color={colors.white} text={"Yes"}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:rp(1),backgroundColor:colors.danger,paddingHorizontal:rp(2),paddingVertical:rp(.8),borderRadius:rp(3)}}>
            <BodyText size='m' color={colors.white} text={"No"}/>
        </TouchableOpacity>
       </View>
       
      </View>
    </View>
  )
}