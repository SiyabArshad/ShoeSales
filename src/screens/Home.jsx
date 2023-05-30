import { View, Text,StyleSheet,TextInput,TouchableOpacity,Pressable, ScrollView,Dimensions,ActivityIndicator } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import Screen from "../components/Screen"
import Octicons from "react-native-vector-icons/Octicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { Avatar,Chip,Image } from 'react-native-elements'
import ShoeCard from '../components/ShoeCard';
import { useRoute,useNavigation } from '@react-navigation/native';
import ItemCard from "../components/ItemCard"
import BodyText from '../components/Typography/BodyText';
export default function Home({data}) {
  const navigation=useNavigation()
  const[lth,setlth]=React.useState(false)
  return (
    <Screen>
       <View style={styles.header}>
       <Pressable onPress={()=>navigation.navigate("homescreen")} style={[styles.center,{paddingHorizontal:rp(1),paddingVertical:rp(.5),borderRadius:rp(.5)}]}>
       <AntDesign name="home" size={24} color={colors.black} />
        </Pressable>
         
        <Pressable onPress={()=>setlth(!lth)} style={[styles.center,{backgroundColor:lth?colors.black:colors.white,paddingHorizontal:rp(1),paddingVertical:rp(.5),borderRadius:rp(.5)}]}>
       {
        lth?
        <Image style={{height:26,width:26}} source={require("../../assets/images/sortwhite.png")}/>
        :
        <Image style={{height:26,width:26}} source={require("../../assets/images/sortblack.png")}/>
       }
        </Pressable>
       </View>
       <View>
       <ScrollView style={{}} horizontal showsHorizontalScrollIndicator={false}> 
       <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:rp(1),marginHorizontal:rp(2)}}>
        <View style={{borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(.6),borderRadius:rp(3),marginRight:rp(1)}}>
          <BodyText  text={data?.color} size='m'/>
        </View>
        <View style={{borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(.6),borderRadius:rp(3),marginRight:rp(1)}}>
          <BodyText  text={data?.brand} size='m'/>
        </View>
        <View style={{borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(.6),borderRadius:rp(3),marginRight:rp(1)}}>
          <BodyText  text={data?.size} size='m'/>
        </View>
        <View style={{borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(.6),borderRadius:rp(3),marginRight:rp(1)}}>
          <BodyText  text={data?.cond} size='m'/>
        </View>
        <View style={{borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(.6),borderRadius:rp(3),marginRight:rp(1)}}>
          <BodyText  text={data?.pair} size='m'/>
        </View>
        </View>
       </ScrollView>
       </View>
         {/* products */}
         <ScrollView showsVerticalScrollIndicator={false}>
         <View style={{display:"flex",flexDirection:"column",marginVertical:rp(1),marginHorizontal:rp(2),marginVertical:rp(1)}}>
        
          {
            [1,2,2,3,4,5,6,7,33,7,788].map((item,i)=>(
              <ItemCard func={()=>navigation.navigate("details",{data})} key={i}/>
            ))
          }
          </View>
        </ScrollView>
        {/* end products */}
    </Screen>
  )
}

const styles=StyleSheet.create({
    header:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:rp(2),
        marginTop:rp(4),
        marginBottom:rp(2)
    },
    center:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    inp:{
      flex:1,
      paddingHorizontal:rp(2),
      paddingVertical:rp(1.2),
      marginRight:rp(1),
      borderRadius:rp(1),
      fontSize:rp(2.7),
      fontFamily:fonts.mregular,
      backgroundColor:colors.lightgrey
    }
})