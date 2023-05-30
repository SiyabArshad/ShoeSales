import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../helpers/colors'
import Icon1 from "react-native-vector-icons/Ionicons"
import Icon2 from "react-native-vector-icons/Foundation"
import fonts from '../helpers/fonts'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import CaptionText from './Typography/BodyText'
import Heading from './Typography/Heading'
import BodyText from './Typography/BodyText'
export default function OrderModal({show=false,callshow=()=>{},message,type}) {
  return (
    <Modal transparent visible={show}>
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,.4)"}}>
        <View style={{
            minHeight:150,
    width:"80%",backgroundColor:colors.white,borderRadius:10
    ,shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity:  0.21,
    shadowRadius: 8.19,
    elevation: 11,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center"
    ,paddingVertical:20
    }}>
<View style={{}}>
    {/* <Heading text={"Order Track Number"} style={{marginBottom:rp(2)}} h='h3'/>
    <BodyText text={"#9784095908"} style={{textAlign:"center"}}/>    
     */}
      <BodyText text={"User id: Ahmed hassan"} size='m' style={{marginBottom:rp(1)}}/>
      <BodyText text={"Order id: #79890089"} size='m' style={{marginBottom:rp(1)}}/>
      <BodyText text={"Paypal id: Ahmed76"} size='m' style={{marginBottom:rp(1)}}/>
      <BodyText text={"Track Number: 789459843"} size='m' style={{marginBottom:rp(2)}}/>
</View>
<Pressable onPress={()=>{
  callshow()
}} style={{backgroundColor:colors.primary,width:"60%",paddingHorizontal:10,paddingVertical:7,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10}}>
    <Text style={{color:colors.white,fontSize:18}}>Ok</Text>
</Pressable>
        </View>
    </View>
    </Modal>
 )
}