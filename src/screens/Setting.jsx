import { View, Text,Modal,TouchableOpacity,Pressable,StyleSheet,ImageBackground, ActivityIndicator ,Platform} from 'react-native'
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
import { Avatar,Image } from 'react-native-elements'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {request,PERMISSIONS} from "react-native-permissions"
import { useRoute,useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, logoutUser } from '../store/auth/authSlice'
import firestore from "@react-native-firebase/firestore"
import auth from "@react-native-firebase/auth"
import storage from "@react-native-firebase/storage"
export default function Setting({route,data}) {
    const[isload,setisload]=React.useState(false)
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const { isLoggedIn, user, profile } = useSelector((state) => state.user);
    console.log("i am profile",profile)
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
                  uploadImage(res?.assets[0].fileName,res?.assets[0].uri)
              }
        }
      
    };
    //upload images to firestorage
    const uploadImage = async (filename,val) => {
        setisload(true);
        try {
          const reference = storage().ref(`images/${filename}`);
          const snapshot = await reference.putFile(val);
          const downloadURL = await reference.getDownloadURL();
            await firestore().collection("users").doc(user?.userid).set({profile:downloadURL})
        } catch (error) {
          console.log(error);
        }
        finally{
            await dispatch(getProfile(user?.userid))
            setisload(false)
        }
      };
    //delete account
    const deleteAccountFunction=async()=>{
        setisload(true)
        try{
                await firestore().collection("users").doc(user?.userid).delete()
                await auth().currentUser.delete()
                await dispatch(logoutUser())
              
            }
        catch(e){
            console.log(e)
        }
        finally{
            setisload(false)
        }
    }
    //end 
   
    React.useEffect(()=>{
        dispatch(getProfile(user?.userid))
    },[])
    
  return (
 <Screen>
    <View style={{flex:1}}>
    <View style={{height:rp(4),width:"95%",backgroundColor:colors.primary,marginHorizontal:"2.5%",borderTopRightRadius:rp(1.7),borderTopLeftRadius:rp(1.7),marginTop:rp(4),marginBottom:rp(2)}}/>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:rp(3)}}>
            <View style={{borderWidth:1,borderColor:colors.primary,marginBottom:rp(.4),padding:rp(.5),display:"flex",justifyContent:"center",alignItems:"center",height:60,width:60,borderRadius:30}}>
            <Image onPress={openImagePicker} PlaceholderContent={<ActivityIndicator/>}  style={{height:50,width:50,borderRadius:25}} source={profile?.profile?{uri:profile?.profile}:require("../../assets/images/user2.jpg")}/>
            </View>
            <BodyText text={user?.name} size='m'  color={colors.lightblack} style={{marginVertical:rp(1)}}/>
    </View>
     <View style={styles.proinfo}>
        <BodyText  text={"Name"} size='s' style={{fontSize:rp(2.3)}} color={colors.lightblack}/>
        <BodyText text={user?.name} style={{fontSize:rp(2.3),marginVertical:rp(1.2)}} />
        <BodyText  text={"Email"} size='s' style={{fontSize:rp(2.3),marginTop:rp(1.5)}} color={colors.lightblack}/>
        <BodyText text={user?.email} style={{fontSize:rp(2.3),marginVertical:rp(1.2)}} />
     </View>
     <CustomButton  style={{backgroundColor:colors.primary,borderRadius:rp(5),marginBottom:rp(1)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Terms and Conditions"}/>
     <CustomButton func={deleteAccountFunction} style={{backgroundColor:colors.primary,borderRadius:rp(5),marginBottom:rp(1)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Delete Account"}/>
     <CustomButton func={()=>dispatch(logoutUser())} style={{backgroundColor:colors.primary,borderRadius:rp(5),marginBottom:rp(1)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Logout"}/>
   
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