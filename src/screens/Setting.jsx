import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import colors from "../helpers/colors"
import fonts from "../helpers/fonts"
import Screen from "../components/Screen"
import Heading from "../components/Typography/Heading"
import BodyText from '../components/Typography/BodyText'
import EntypoIcon from "react-native-vector-icons/Entypo"
import FeatherIcon from "react-native-vector-icons/Feather"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import CustomButton from '../components/CustomButton'
import { Avatar } from 'react-native-elements'
export default function Setting({navigation,route}) {
  return (
 <Screen>
    <View style={{flex:1}}>
    <View style={{height:rp(4),width:"95%",backgroundColor:colors.primary,marginHorizontal:"2.5%",borderTopRightRadius:rp(1.7),borderTopLeftRadius:rp(1.7),marginTop:rp(4),marginBottom:rp(2)}}/>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:rp(3)}}>
            <View style={{borderWidth:1,borderColor:colors.primary,marginBottom:rp(.4),padding:rp(.5),display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:30}}>
            <Avatar rounded size={"medium"} source={require("../../assets/images/user2.jpg")}/>
            </View>
            <BodyText text={"Jhone 898"} size='m'  color={colors.lightblack} style={{marginVertical:rp(1)}}/>
    </View>
     <View style={styles.proinfo}>
        <BodyText  text={"Name"} size='s' style={{fontSize:rp(2.3)}} color={colors.lightblack}/>
        <BodyText text={"Jean Carla"} style={{fontSize:rp(2.3),marginVertical:rp(1.2)}} />
        <BodyText  text={"Email"} size='s' style={{fontSize:rp(2.3),marginTop:rp(1.5)}} color={colors.lightblack}/>
        <BodyText text={"Jean@gmail.com"} style={{fontSize:rp(2.3),marginVertical:rp(1.2)}} />
     </View>
     <CustomButton func={()=>navigation.navigate("chat")} style={{backgroundColor:colors.primary,borderRadius:rp(5),marginBottom:rp(1)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Privacy Policy"}/>
     <CustomButton func={()=>navigation.navigate("login")} style={{backgroundColor:colors.primary,borderRadius:rp(5),marginBottom:rp(1)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Logout"}/>
   
     </View>
 </Screen>
  )
}

const styles=StyleSheet.create({
    proinfo:{
        width:"95%",
        marginHorizontal:"2.5%",
        padding:rp(2),
        backgroundColor:colors.lightgrey,
        borderRadius:rp(2),
        marginBottom:rp(2),
    }
})