import { View, Text,StyleSheet,TextInput,TouchableOpacity,Pressable, ScrollView,Dimensions,ActivityIndicator,ImageBackground } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import Heading from "../components/Typography/Heading"
import Screen from "../components/Screen"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Avatar,Image } from 'react-native-elements'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import BodyText from '../components/Typography/BodyText';
import Loading from "../components/Loading"
import MessageCard from "../components/MessageCard"
import { menShoeSizesEU,womenShoeSizesEU } from '../helpers/shoesizes';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {request,PERMISSIONS} from "react-native-permissions"
import CustomButton from "../components/CustomButton"
import { useRoute,useNavigation } from '@react-navigation/native';

export default function AddPayment({route}) {
  const navigation=useNavigation()
  const {data}=route.params
  const [method,setmethod]=React.useState("paypal")
  const [isload,setisload]=React.useState(false)
  const [issubmit,setissubmit]=React.useState(false)
  const [Error,setError]=React.useState('')
  const [type,settype]=React.useState(false)
  const [pyname,setpyname]=React.useState("")
  const handleSubmit = async () => {
    setisload(true);
    try {
      
      setError("Payment Successfull");
      settype(true);
    } catch (error) {
      setError("Failed");
      settype(false);
    }
   finally{
    setissubmit(true);
    setisload(false);
   }
  };
  
const callbacksubmit=()=>{
    setissubmit(false)
    navigation.navigate("home",{data})
}
  return (
    <Screen>
       <MessageCard type={type} message={Error} show={issubmit} callshow={callbacksubmit}/>
       <ScrollView showsVerticalScrollIndicator={false}>
       <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:rp(2),marginVertical:rp(2)}}>
                 <Pressable onPress={()=>navigation.pop()} style={styles.center}>
                 <Entypo name="chevron-left" size={24} color={colors.black}/>
               </Pressable>
     </View>
    <View style={{marginHorizontal:rp(2),flex:1}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(1.5)}}>
                <BodyText text={"Brand"} h='h3'/>
                <TextInput editable={false}  value={data?.brand} style={{width:200,height:32,borderRadius:rp(.3),color:colors.lightblack,fontFamily:fonts.mitalic,paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
    </View>
    {
            data?.type==="afos"&&
            <>
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(1.5)}}>
                <BodyText text={"PAIR"} h='h3'/>
                <TextInput editable={false}  value={data?.pair} style={{color:colors.lightblack,width:200,height:32,borderRadius:rp(.3),paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(1.5)}}>
                <BodyText text={"COLOR"} h='h3'/>
                <TextInput editable={false}  value={data?.color} style={{color:colors.lightblack,width:200,height:32,borderRadius:rp(.3),paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
            </>
          }
          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(1.5)}}>
                <BodyText text={"SIZE"} h='h3'/>
                <TextInput editable={false}  value={data?.size} style={{color:colors.lightblack,fontFamily:fonts.mitalic, width:200,height:32,borderRadius:rp(.3),paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:rp(1.5)}}>
                <BodyText text={"CONDITION"} h='h3'/>
                <TextInput editable={false}  value={data?.cond} style={{width:200,height:32,borderRadius:rp(.3),color:colors.lightblack,fontFamily:fonts.mitalic,paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
    <View style={{marginVertical:rp(2)}}>
      <Heading color={colors.black} text={"Payment Methods"} h='h3'/>
      <View style={{marginTop:rp(2)}}>
        <View  style={{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:rp(2)}}>
          <TouchableOpacity onPress={()=>setmethod("paypal")} style={{height:14,width:14,borderRadius:7,borderWidth:1,borderColor:colors.black,backgroundColor:method==="paypal"?colors.black:colors.white,marginRight:rp(2)}}/>
          <BodyText size='m' text={"Paypal"}/>
        </View>
      </View>
    </View>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"User name"} h='h3'/>
                <TextInput placeholder='Paypal Username' onChangeText={(e)=>setpyname(e)}  value={pyname} style={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
    <View style={{marginBottom:rp(2)}}>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:rp(2)}}>
        <Heading color={colors.black} h='h4' text={"Amount"}/>
        <BodyText text={`€  ${data?.price?data.price:100}`}/>
      </View>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:rp(2)}}>
        <Heading color={colors.black} h='h4' text={"Shipping Cost"}/>
        <BodyText text={`€  20`}/>
      </View>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:rp(2)}}>
        <Heading color={colors.black} h='h4' text={"Fees"}/>
        <BodyText text={`€  12`}/>
      </View>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:rp(2)}}>
        <Heading color={colors.black} h='h4' text={"Total"}/>
        <BodyText text={`€  132`}/>
      </View>
   
    </View>

    <CustomButton func={handleSubmit} style={{marginTop:rp(2),marginBottom:rp(5),backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Pay Now"}/>

    </View>
    </ScrollView>
    </Screen>
  )
}


const styles=StyleSheet.create({
  mncon:{
      flex:1,
      backgroundColor:colors.white
  },
  header:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginHorizontal:rp(2),
      marginVertical:rp(2)
  },
  center:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
  },
  inp:{
    flex:1,
    paddingHorizontal:rp(2),
    paddingVertical:rp(.7),
    marginRight:rp(1),
    borderWidth:1,
    borderColor:colors.primary,
    borderRadius:rp(1),
    fontFamily:fonts.mregular
  }
})