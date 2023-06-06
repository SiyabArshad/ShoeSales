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
import axios from 'axios';
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
import CountryDropDown from "../components/CountryDropDown"
export default function AddShoe({route}) {
    const navigation=useNavigation()
    const [showgide,setshowguide]=React.useState(false)
    const {data}=route.params
    const [desc,setdesc]=React.useState("")
    const [paypalname, setpaypalname] = React.useState("");
    const [price,setprice]=React.useState("")
    const [country,setcountry]=React.useState("")

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
    const[countries,setcountries]=React.useState([])
    const [load,setload]=React.useState(false)
    const getconlist=async()=>{
        setload(true)
            const options = {
                method: 'GET',
                url: 'https://country-list5.p.rapidapi.com/countrylist/',
                headers: {
                  'X-RapidAPI-Key': '89d9015bd8msh1a942f0cc8a330bp1f90fcjsn2d4ba612063c',
                  'X-RapidAPI-Host': 'country-list5.p.rapidapi.com'
                }
              };
              
              try {
                const response = await axios.request(options);
                setcountries(response.data?.country)
            } catch (error) {
                console.error(error);
            }
        finally{
            setload(false)
        }
    }
React.useEffect(()=>{
    getconlist()
},[])
return (
  <Screen> 
    <Loading visible={load}/>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:rp(2),marginVertical:rp(2)}}>
                 <Pressable onPress={()=>navigation.pop()} style={styles.center}>
                 <Entypo name="chevron-left" size={24} color={colors.black}/>
               </Pressable>
     </View>
     <View style={{flex:1,paddingHorizontal:rp(2),paddingVertical:rp(2)}}>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={{}}>
        <View style={{marginBottom:rp(2),display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Heading text={"List an Item"} h='h3' />
        {/* <TouchableOpacity onPress={()=>setshowguide(!showgide)} style={{marginLeft:rp(2)}}>
        <Entypo name="info-with-circle" size={24} color="black" />
        </TouchableOpacity> */}
        </View>
      
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"Brand"} h='h3'/>
                <TextInput editable={false}  value={data?.brand} style={{width:200,height:32,borderRadius:rp(.3),color:colors.lightblack,fontFamily:fonts.mitalic,paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
          {
            data?.type==="afos"&&
            <>
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"PAIR"} h='h3'/>
                <TextInput editable={false}  value={data?.pair} style={{color:colors.lightblack,width:200,height:32,borderRadius:rp(.3),paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"COLOR"} h='h3'/>
                <TextInput editable={false}  value={data?.color} style={{color:colors.lightblack,width:200,height:32,borderRadius:rp(.3),paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
            </>
          }
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"SIZE"} h='h3'/>
                <TextInput editable={false}  value={data?.size} style={{color:colors.lightblack,fontFamily:fonts.mitalic, width:200,height:32,borderRadius:rp(.3),paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"CONDITION"} h='h3'/>
                <TextInput editable={false}  value={data?.cond} style={{width:200,height:32,borderRadius:rp(.3),color:colors.lightblack,fontFamily:fonts.mitalic,paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"PRICE"} h='h3'/>
                <TextInput maxLength={4} keyboardType='number-pad' onChangeText={(e)=>setprice(e)} value={price} placeholderTextColor={colors.lightblack} placeholder='Price €' style={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"PAYPAL"} h='h3'/>
                <TextInput onChangeText={(e)=>setpaypalname(e)} value={paypalname} placeholderTextColor={colors.lightblack} placeholder='Paypal username' style={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"COUNTRY"} h='h3'/>
                {/* <TextInput onChangeText={(e)=>setcountry(e)} value={country} placeholderTextColor={colors.lightblack} placeholder='Country' style={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 </TextInput> */}
                   <CountryDropDown
        selectedfunc={(val) => setcountry(val)} 
        data={countries} 
        val={country}
    />
            </View>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",marginVertical:rp(1)}}>
            <TouchableOpacity onPress={()=>setshowguide(!showgide)} style={{marginLeft:rp(2)}}>
        <Entypo name="info-with-circle" size={24} color="black" />
        </TouchableOpacity>
            </View>
            {
        showgide&& 
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
        <View style={{width:"80%",minHeight:100,marginBottom:rp(2.5),backgroundColor:colors.white,borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(1.5),borderRadius:rp(1)}}>
        <BodyText size='m' style={{width:"80%"}} text={"Hate speech,Phone numbers,emails or links are not allowed in the description. Otherwise the Ad will be deleted."}></BodyText>
    </View>
    </View>
       }
        <View style={{minHeight:100}}>
<TextInput onChangeText={(e)=>setdesc(e)} value={desc} multiline style={{flex:1,paddingHorizontal:rp(2),paddingVertical:rp(1.4),borderWidth:1,borderColor:colors.lightblack,borderRadius:rp(.6),color:colors.black,fontFamily:fonts.mregular,marginBottom:rp(2)}} placeholder='Enter Note'/>
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
    <CustomButton func={()=>navigation.navigate("payment",{data:{...data,paypalname,price,country}})}  style={{backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Next"}/>
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