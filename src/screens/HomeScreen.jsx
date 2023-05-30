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
    const navigation=useNavigation()
    const [csstatus,setcsstatus]=React.useState(false)
    const [afo,setafo]=React.useState("STANDAR")
    const [bar,setbar]=React.useState("")
    const [brand,setbrand]=React.useState("PONSETI")
    const [color,setcolor]=React.useState("GRAY")
    const [size,setsize]=React.useState("Preemie 6-0")
    const [pair,setpair]=React.useState("PAIR")
    const [cond,setcond]=React.useState("NEW")
  
   const sellfunc=()=>{
    setcsstatus(true)
    if(afo==='')
    {    
        navigation.navigate("additem",{data:{type:"bar",bar,brand,color,size,pair,cond,csstatus }})
    }
    else
    {
        navigation.navigate("additem",{data:{type:"afos",afo,brand,color,size,pair,cond,csstatus }})
    }
  
   }
   const buyfunc=()=>{
    setcsstatus(false)
    if(afo==='')
    {    
        navigation.navigate("home",{data:{type:"bar",bar,brand,color,size,pair,cond,csstatus }})
    }
    else
    {
        navigation.navigate("home",{data:{type:"afos",afo,brand,color,size,pair,cond,csstatus }})
    }
  
   }
  return (
    <Screen>

    <View style={{flex:1,paddingHorizontal:rp(2),paddingVertical:rp(2)}}>
      <View style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:rp(1),marginBottom:rp(5)}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",borderRadius:rp(1),borderWidth:1,borderColor:colors.black,padding:2}}>
                <TouchableOpacity onPress={()=>setcsstatus(false)} style={{...styles.center,borderRadius:rp(1),paddingHorizontal:rp(5),paddingVertical:rp(.8),backgroundColor:colors.black}}>
                    <BodyText color={colors.white} text={"Buy"}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={sellfunc} style={{...styles.center,borderRadius:rp(1),paddingHorizontal:rp(5),paddingVertical:rp(.8),backgroundColor:colors.white}}>
                    <BodyText color={colors.black} text={"Sell"}/>
                </TouchableOpacity>
            </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginBottom:rp(2)}}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"AFOs"} h='h3'/>
          
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
                setbar(val)
            }}
            val={bar}
            data={[
                {key:"SMALL",value:"SMALL"},
                {key:"NORMAL",value:"NORMAL"},
                
            ]} 
            />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"BRAND"} h='h3'/>
                <SelectList 
                dropdownStyles={{borderRadius:rp(.2)}}
                boxStyles={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(1)}}
        setSelected={(val) => setbrand(val)} 
        data={[
            {key:"PONSETI",value:"PONSETI"},
            {key:"OTHER",value:"OTHER"},
            
        ]} 
        save="value"
    />
            </View>    

            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"COLOR"} h='h3'/>
                <SelectList 
                dropdownStyles={{borderRadius:rp(.2)}}
                boxStyles={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(1)}}
        setSelected={(val) => setcolor(val)} 
        data={[
            {key:"GRAY",value:"GRAY"},
            {key:"BLUE",value:"BLUE"},
            {key:"PINK",value:"PINK"},
            {key:"OTHER",value:"OTHER"},
            
        ]} 
        save="value"
    />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"SIZE"} h='h3'/>
                <SelectList 
                dropdownStyles={{borderRadius:rp(.2)}}
                boxStyles={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(1)}}
        setSelected={(val) => setsize(val)} 
        data={[
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
        save="value"
    />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"PAIR"} h='h3'/>
                <SelectList 
                dropdownStyles={{borderRadius:rp(.2)}}
                boxStyles={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(1)}}
        setSelected={(val) => setpair(val)} 
        data={[
            {key:"PAIR",value:"PAIR"},
            {key:"LEFT",value:"LEFT"},
            {key:"RIGHT",value:"RIGHT"}
            
        ]} 
        save="value"
    />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:rp(2.5)}}>
                <BodyText text={"CONDITION"} h='h3'/>
                <SelectList 
                dropdownStyles={{borderRadius:rp(.2)}}
                boxStyles={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(1)}}
        setSelected={(val) => setcond(val)} 
        data={[
            {key:"NEW",value:"NEW"},
            {key:"LIKE NEW",value:"LIKE NEW"},
            {key:"USED",value:"USED"}
            
        ]} 
        save="value"
    />
            </View>

        </View>
        <CustomButton func={buyfunc} style={{marginTop:rp(2),marginBottom:rp(5),backgroundColor:colors.black,borderRadius:rp(5)}} textstyle={{color:colors.white,fontFamily:fonts.msemibold}} text={"NEXT"}/>
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