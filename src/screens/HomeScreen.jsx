import { View, Text,StyleSheet,TextInput,TouchableOpacity,Pressable, ScrollView,Dimensions,ActivityIndicator } from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import Screen from "../components/Screen"
import Entypo from "react-native-vector-icons/Entypo"
import { Avatar,Image } from 'react-native-elements'
import ShoeCard from '../components/ShoeCard';
import BodyText from '../components/Typography/BodyText';
import Heading from '../components/Typography/Heading';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from "react-native-picker-select";
import { SelectList } from 'react-native-dropdown-select-list'
import DropDownMenu from '../components/DropDownMenu';
import CustomButton from "../components/CustomButton"
import { useRoute,useNavigation } from '@react-navigation/native';

export default function HomeScreen({route}) {
    const {data}=route?.params
    const navigation=useNavigation()
    const [afo,setafo]=React.useState("STANDAR")
    const [bar,setbar]=React.useState("")
    const [brand,setbrand]=React.useState("PONSETI")
    const [color,setcolor]=React.useState("GRAY")
    const [size,setsize]=React.useState("Preemie 6-0")
    const [pair,setpair]=React.useState("PAIR")
    const [cond,setcond]=React.useState("NEW")
  
   const sellfunc=()=>{
    if(afo==='')
    {    
        navigation.navigate("additem",{data:{type:"bar",bar,brand,color,size,pair,cond,csstatus:data }})
    }
    else
    {
        navigation.navigate("additem",{data:{type:"afos",afo,brand,color,size,pair,cond,csstatus:data }})
    }
  
   }
   const buyfunc=()=>{
    if(afo==='')
    {    
        navigation.navigate("home",{data:{type:"bar",bar,brand,color,size,pair,cond,csstatus:data }})
    }
    else
    {
        navigation.navigate("home",{data:{type:"afos",afo,brand,color,size,pair,cond,csstatus:data }})
    }
  
   }
   const handlefunc=()=>{
    if(data)
    {
        sellfunc()
    }
    else
    {
        buyfunc()
    }
   }
  return (
    <Screen>
    <View style={{flex:1,paddingHorizontal:rp(2),paddingVertical:rp(2)}}>
    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:rp(2),marginBottom:rp(5)}}>
                 <Pressable onPress={()=>navigation.pop()} style={styles.center}>
                 <Entypo name="chevron-left" size={24} color={colors.black}/>
               </Pressable>
              
     </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginBottom:rp(2)}}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"AFO System"} h='h3'/>       
    <DropDownMenu
            selectedfunc={(val)=>{
                setbar("")
                setafo(val)
            }}
            val={afo}
            data={[
            {key:"STANDAR",value:"STANDAR"},
            {key:"TOE STIT",value:"TOE STIT(TS)"},
            {key:"PLANTAR FLEXION",value:"PLANTAR FLEXION(PFS)"}
            ,]} 
            />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"BAR"} h='h3'/>
        <DropDownMenu
            selectedfunc={(val)=>{
                setafo("")
                // setcolor("")
                // setsize("")
                // setpair("")
                setbar(val)
            }}
            val={bar}
            data={[
                {key:"ABDUCTION BAR",value:"ABDUCTION BAR"}
                // {key:"SMALL",value:"SMALL"},
                // {key:"NORMAL",value:"NORMAL"},
                
            ]} 
            />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"BRAND"} h='h3'/>
                
<DropDownMenu
            selectedfunc={(val)=>{
                setbrand(val)
            }}
            val={brand}
            data={[
                {key:"PONSETI",value:"PONSETI"},
                {key:"OTHER",value:"OTHER"},
                
            ]} 
            />
            </View>    

            {
                !bar&&<>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"COLOR"} h='h3'/>
<DropDownMenu
            selectedfunc={(val) => setcolor(val)} 
            data={
             bar?[]:   [
                {key:"GRAY",value:"GRAY"},
                {key:"BLUE",value:"BLUE"},
                {key:"PINK",value:"PINK"},
                {key:"OTHER",value:"OTHER"},
                
            ]
        } 
            val={color}
            />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"SIZE"} h='h3'/>
                <DropDownMenu
            selectedfunc={(val) => setsize(val)} 
        data={
            bar?[]: [
            {key:"Extra Short",value:"Extra Short"},
            {key:"Short",value:"Short"},
            {key:"Long",value:"Long"},
            {key:"Preemie 6-0",value:"Preemie 6-0"},
            {key:"Preemie 5-0",value:"Preemie 5-0"},
            {key:"0000",value:"0000"},
            {key:"000",value:"000"},
            {key:"00",value:"00"},
            {key:"0",value:"0"},
            {key:"1",value:"1"},
            {key:"2",value:"2"},
            {key:"3",value:"3"},
            {key:"4",value:"4"},
            {key:"5",value:"5"},
            {key:"6",value:"6"},
            {key:"7",value:"7"},
            {key:"8",value:"8"},
            {key:"9",value:"9"},
            {key:"10",value:"10"},
            {key:"11",value:"11"},
            {key:"12",value:"12"},
        ]} 
        val={size}
    />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"PAIR"} h='h3'/>
                <DropDownMenu
        selectedfunc={(val) => setpair(val)} 
        data={
            bar?[]: [
            {key:"PAIR",value:"PAIR"},
            {key:"LEFT",value:"LEFT"},
            {key:"RIGHT",value:"RIGHT"}
            
        ]} 
        val={pair}
    />
            </View>
                </>
            }
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"CONDITION"} h='h3'/>
                <DropDownMenu
             selectedfunc={(val) => setcond(val)} 
        data={[
            {key:"NEW",value:"NEW"},
            {key:"LIKE NEW",value:"LIKE NEW"},
            {key:"USED",value:"USED"}
            
        ]} 
        val={cond}
    />
            </View>

        </View>
        <CustomButton func={handlefunc} style={{marginTop:rp(2),marginBottom:rp(5),backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,fontFamily:fonts.msemibold}} text={"NEXT"}/>
      </ScrollView>
    </View>
    </Screen>
  )
}

const styles=StyleSheet.create({
    center:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
})