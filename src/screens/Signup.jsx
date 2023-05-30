import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import fonts from "../helpers/fonts"
import colors from '../helpers/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MessageCard from '../components/MessageCard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Terms from '../components/Terms';
import CustomButton from '../components/CustomButton';
import { useRoute,useNavigation } from '@react-navigation/native';
import logoimage from "../../assets/images/logo.png"

const validationSchema = Yup.object().shape({
  name:Yup.string().required("Enter Name"),
  email: Yup.string().email('Invalid email').required('Email is required').min(10),
  password: Yup.string().required('Password is required').min(6),
});
export default function Signup() {
  const navigation=useNavigation()
  
    const [isload,setisload]=React.useState(false)
    const [issubmit,setissubmit]=React.useState(false)
    const [Error,setError]=React.useState('')
    const [type,settype]=React.useState(false)
    const [showTerms,setshowTerms]=React.useState(false)

    const handleSubmit = async () => {
        setisload(true);
        try {
          
          setError("Loggedin Successfully");
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
    const callbackterms=()=>{
      setshowTerms(false)
    }
  React.useEffect(()=>{
    setshowTerms(true)
  },[])
  return (
    <ScrollView style={styles.mnonb} showsVerticalScrollIndicator={false}>
      <Terms callshow={callbackterms} show={showTerms}/>
     <MessageCard type={type} message={Error} show={issubmit} callshow={callbacksubmit}/>
     <View style={{marginTop:rp(8),marginHorizontal:rp(0),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
     <Text style={styles.text1}>
       {" "}Create Your {"\n"} Account :)
     </Text>
     <Image source={logoimage} style={{height:100,width:200}}/>
     </View>
     <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
       {({ handleChange, handleSubmit, values, errors }) => (
     <View style={{marginTop:rp(8),marginHorizontal:rp(2)}}>
     <View style={{marginBottom:rp(5)}}>
        <Text style={styles.lable}>Name</Text>
        <TextInput 
         onChangeText={handleChange('name')}
         value={values.name}
         placeholder="Name"
        style={{marginTop:rp(1),borderBottomWidth:1,borderBottomColor:colors.black,paddingHorizontal:rp(1.2),paddingVertical:rp(.6),color:colors.black,fontFamily:fonts.mregular}}/>
      {errors.name && <Text style={{color:colors.danger,marginTop:rp(1)}}>{errors.name}</Text>}
     </View>
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
     <CustomButton func={handleSubmit}  style={{backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"SIGN UP"}/>
     <CustomButton func={()=>navigation.navigate("homescreen")}  style={{marginTop:rp(1),backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,textTransform:"capitalize",fontFamily:fonts.msemibold,fontSize:rp(2.2)}} text={"Continue with Paypal"}>
      <Image style={{height:25,width:25,marginRight:rp(2)}} source={require("../../assets/images/paypal.png")}/>
      </CustomButton>
      
                <Pressable 
                onPress={()=>navigation.navigate("login")}
                 style={{marginTop:rp(3)}}>
                    <Text style={{fontFamily:fonts.mregular,fontSize:rp(2.5),color:colors.textgrey}}>
                  Already have an Account?
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
        fontSize:rp(4)
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