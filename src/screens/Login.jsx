import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import fonts from "../helpers/fonts"
import colors from '../helpers/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MessageCard from '../components/MessageCard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/CustomButton';
import { useRoute,useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required').min(10),
  password: Yup.string().required('Password is required').min(6),
});
export default function Login() {
  const navigation=useNavigation()
  
    const [isload,setisload]=React.useState(false)
    const [issubmit,setissubmit]=React.useState(false)
    const [Error,setError]=React.useState('')
    const [type,settype]=React.useState(false)

    const handleSubmit = async () => {
        setisload(true);
        try {
          setError("Logged in Successfully");
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
        navigation.navigate("homescreen")
    }
  return (
    <ScrollView style={styles.mnonb} showsVerticalScrollIndicator={false}>
     <MessageCard type={type} message={Error} show={issubmit} callshow={callbacksubmit}/>
     <View style={{display:"flex",flexDirection:"row",marginTop:rp(5),marginHorizontal:rp(2)}}>
        
        <Pressable onPress={()=>navigation.pop()} style={styles.btn}>
        <IonicIcon name="arrow-back" size={24} color={colors.white} />
        </Pressable>
        </View>
     <View style={{marginTop:rp(5),marginHorizontal:rp(0)}}>
     <Text style={styles.text1}>
       {" "}Login {"\n"} Account :)
     </Text>
     </View>
     <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
       {({ handleChange, handleSubmit, values, errors }) => (
     <View style={{marginTop:rp(8),marginHorizontal:rp(2)}}>
     <View style={{marginBottom:rp(5)}}>
        <Text style={styles.lable}>Email</Text>
        <TextInput 
         onChangeText={handleChange('email')}
         value={values.email}
         placeholder="Email"
        style={{marginTop:rp(1),borderBottomWidth:1,borderBottomColor:colors.black,paddingHorizontal:rp(1.2),paddingVertical:rp(.6),color:colors.black,fontFamily:fonts.mregular}}/>
      {errors.email && <Text style={{color:colors.danger,marginTop:rp(1)}}>{errors.email}</Text>}
     </View>
     <View style={{marginBottom:rp(5)}}>
        <Text style={styles.lable}>Password</Text>
        <TextInput secureTextEntry 
       onChangeText={handleChange('password')}
       value={values.password}
       placeholder="Password"
        style={{marginTop:rp(1),borderBottomWidth:1,borderBottomColor:colors.black,paddingHorizontal:rp(1.2),paddingVertical:rp(.6),color:colors.black,fontFamily:fonts.mregular}}/>
     {errors.password && <Text style={{color:colors.danger,marginTop:rp(1)}}>{errors.password}</Text>}
     </View>
     <View style={[{marginBottom:rp(5),zIndex:999},styles.centertext]}>
     <CustomButton func={handleSubmit}  style={{backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"LOGIN"}/>
     <CustomButton func={()=>navigation.navigate("homescreen")}  style={{marginTop:rp(1),backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold,fontSize:rp(2.2)}} text={"Continue with Google"}>
      <Image style={{height:25,width:25,marginRight:rp(2)}} source={require("../../assets/images/google.png")}/>
      </CustomButton>
     
     <Pressable 
                onPress={()=>navigation.navigate("forgot")}
                 style={{marginTop:rp(3)}}>
                    <Text style={{fontFamily:fonts.mregular,fontSize:rp(2.5),color:colors.textgrey}}>
                    Forgot Password?
                    </Text>
                </Pressable>
     </View> 
     </View>
       )
}
     </Formik>
 
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    mnonb:{
        flex:1,
        backgroundColor:colors.white
    },
    centertext:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    btn:{
        backgroundColor:colors.black,
        paddingHorizontal:5,
        paddingVertical:4,
        borderRadius:5
    },
    text1:{
        color:colors.black,
        fontFamily:fonts.mebold,
        fontSize:rp(5)
    },
    text2:{
        color:colors.textgrey,
        fontFamily:fonts.mmedium,
        fontSize:rp(2.5)
    },
    lable:{
        fontFamily:fonts.mregular,
        fontSize:rp(3.5),
        color:colors.textgrey
    }
})