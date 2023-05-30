import { View, Text,StyleSheet,TextInput,TouchableOpacity,Pressable, ScrollView,Dimensions,ActivityIndicator,ImageBackground } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import Heading from "../components/Typography/Heading"
import Screen from "../components/Screen"
import AntIcon from "react-native-vector-icons/AntDesign"
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

export default function AddShoe({navigation,route}) {
    const {data}=route.params
    console.log(data)
    const [title, settitle] = React.useState('');
    const [desc,setdesc]=React.useState("")
    const [brand,setbrand]=React.useState("")
    const [shoecolor,setshoecolor]=React.useState("Others")
    const [phone,setphone]=React.useState()
    const [price,setprice]=React.useState()
    const [shoesize,setshoesize]=React.useState(40)
    const [gender,setgender]=React.useState("Men")
    const [condition,setcondition]=React.useState("New")
    const [pair,setpair]=React.useState("Pair")
    const askForPermissions=async(permissions)=>{
        const result=await request(permissions)
        return result
    }
    const[image,setimage]=React.useState(null)

    const openImagePicker = async() => {
        if(Platform.OS==="ios")
        {
            const rees=askForPermissions(PERMISSIONS.IOS.PHOTO_LIBRARY)
            const options = {
                title: 'Select Image',
                mediaType: 'photo',
                quality: 0.7,
                maxWidth: 500,
                maxHeight: 500,
              };
              
              const res=await launchImageLibrary(options);
              if(!res.didCancel)
              {
                  setimage(res?.assets)
              }
        }
        else
        {
            askForPermissions(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
            const options = {
                title: 'Select Image',
                mediaType: 'photo',
                quality: 0.7,
                maxWidth: 500,
                maxHeight: 500,
              };
              
              const res=await launchImageLibrary(options);
              if(!res.didCancel)
              {
                  setimage(res?.assets)
              }
        }
      
    };

return (
  <Screen> 
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:rp(2),marginVertical:rp(2)}}>
                 <Pressable onPress={()=>navigation.pop()} style={styles.center}>
                 <Entypo name="chevron-left" size={24} color={colors.black}/>
               </Pressable>
              
     </View>
     <View style={{flex:1,paddingHorizontal:rp(2),paddingVertical:rp(2)}}>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={{}}>
        <Heading text={"List an Item"} h='h3' style={{marginBottom:rp(2)}}/>
        <View style={{minHeight:100}}>
<TextInput onChangeText={(e)=>setdesc(e)} value={desc} multiline style={{flex:1,paddingHorizontal:rp(2),paddingVertical:rp(1.4),borderWidth:1,borderColor:colors.lightblack,borderRadius:rp(.6),color:colors.black,fontFamily:fonts.mregular,marginBottom:rp(2)}} placeholder='Enter Notice'/>
</View>


<View style={{marginBottom:rp(2)}}>
        <BodyText text={"Picture"} size='m' style={{marginVertical:rp(2)}}/>
        <Pressable onPress={openImagePicker} style={{height:rp(30),borderWidth:1,borderRadius:rp(2),borderColor:colors.black,borderStyle:'dashed',display:"flex",justifyContent:"center",alignItems:"center"}}>
        <AntIcon name="cloudupload" size={40} color={colors.lightblack} />
               <View style={{display:"flex",flexDirection:"row",marginTop:rp(2)}}>
                <BodyText size='m' text={"Drop your files here or "} color={colors.lightblack}/>
                <BodyText size='m' text={"Choose File"} color={colors.black} style={{}} />
                </View> 
                <BodyText size='m' text={"upload file up to 10 mb"} color={colors.lightblack}/>
        </Pressable>
    </View>
   {
    image!==null&& 
<View style={{marginBottom:rp(2)}}>
<Image  source={{uri:image[0]?.uri}} style={{height:rp(30),borderRadius:rp(2)}}>
    </Image>
</View>
   }
    <CustomButton  style={{backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Next"}/>
     </View>
      </ScrollView>
    </View>
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