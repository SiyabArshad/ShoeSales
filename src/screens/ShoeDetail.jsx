import { View, Text,StyleSheet,TextInput,TouchableOpacity,Pressable, ScrollView,Dimensions,ActivityIndicator,ImageBackground } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import CaptionText from "../components/Typography/BodyText"
import Heading from "../components/Typography/Heading"
import Screen from "../components/Screen"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Image } from 'react-native-elements';
import BodyText from '../components/Typography/BodyText';
import CustomButton from "../components/CustomButton"
import { useRoute,useNavigation } from '@react-navigation/native';

export default function ShoeDetail({route}) {
  const navigation=useNavigation()
  const {data}=route?.params
    const [fav,setfav]=React.useState(false)
  return (
    <Screen>
  <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:rp(2),marginVertical:rp(2)}}>
                 <Pressable onPress={()=>navigation.pop()} style={styles.center}>
                 <Entypo name="chevron-left" size={24} color={colors.primary}/>
               </Pressable>
                <Pressable onPress={()=>setfav(!fav)} style={styles.center}>
                <MaterialIcons name={fav?"favorite":"favorite-border"} size={24} color={colors.primary} />
               </Pressable>
     </View>
     <View style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
     <View style={{display:"flex",flexDirection:"row"}}>
        <View style={{width:"50%",paddingHorizontal:rp(2)}}>
            <BodyText text={data?.brand?data.brand:"Nike"} color={colors.lightblack} style={{marginLeft:rp(2)}}/>
            <Heading h='h3' text={data?.type==="afos"?data?.afo:data?.bar} style={{marginLeft:rp(2),marginVertical:rp(2)}}/>
            <View style={{marginBottom:rp(2),marginLeft:rp(2),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <View>
            <BodyText text={"Price"} color={colors.lightblack} style={{marginBottom:rp(.5)}}/>
            <Heading h='h4' text={`€ ${data?.price?data.price:"200"}`} />
            </View>
            <View>
            <BodyText text={"Color"} color={colors.lightblack} style={{marginBottom:rp(.5)}}/>
            <Heading h='h4' text={data?.color?data.color:"Grey"} />
            </View>
            </View>
            <View style={{marginBottom:rp(2),marginLeft:rp(2),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <View>
            <BodyText text={"Size"} color={colors.lightblack} style={{marginBottom:rp(.5)}}/>
            <Heading h='h4' text={data?.size?data.size:"7s"} />
            </View>
            </View>
            <View style={{marginBottom:rp(2),marginLeft:rp(2),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <View>
            <BodyText text={"Country"} color={colors.lightblack} style={{marginBottom:rp(.5)}}/>
            <Heading h='h4' text={data?.country?data.country:"USA"} />
            </View>
            <View>
            <BodyText text={"Cond"} color={colors.lightblack} style={{marginBottom:rp(.5)}}/>
            <Heading h='h4' text={data?.cond?data.cond:"New"} />
            </View>
            </View>
        </View>
        <View style={{width:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Image PlaceholderContent={<ActivityIndicator/>} resizeMode='contain' style={{height:300,width:140}} source={require("../../assets/images/shoe1.png")}/>
        </View>
     </View>
     <View style={{backgroundColor:colors.primary,paddingHorizontal:rp(2),paddingVertical:rp(4),borderTopLeftRadius:rp(3),borderTopRightRadius:rp(3),top:40}}>
        <Heading text={"Notice"} color={colors.white} h='h3'/>
       <ScrollView style={{marginVertical:rp(1),height:100}} showsVerticalScrollIndicator={false}>
       <CaptionText size='m' style={{marginVertical:rp(1),textAlign:"justify"}} color={colors.white} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam diam ut aliquam mauris ut odio elit mi. Vitae arcu orci et fames. Libero, sed scelerisque et dui leo iaculis pellentesque."}/>
       </ScrollView>
            <CustomButton func={()=>navigation.navigate("chat",{data})} style={{marginTop:rp(2),marginBottom:rp(5),backgroundColor:colors.white,borderRadius:rp(5)}} textstyle={{color:colors.primary,textTransform:"capitalize",fontFamily:fonts.msemibold}} text={"Chat"}/>
     </View>
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