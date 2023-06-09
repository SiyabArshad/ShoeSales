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
import Notification from '../components/Notification';
import OwnProduct from '../components/OwnProduct';
import ListItemSwipeable from 'react-native-elements/dist/list/ListItemSwipeable';
import { ListItem } from 'react-native-elements';
export default function StartScreen({route}) {
    const navigation=useNavigation()
    const [tab,settab]=React.useState(0)
    

  return (
    <Screen>
    <View style={{flex:1,marginHorizontal:rp(2),marginVertical:rp(2)}}>
      <BodyText text={"Welcome Jhones"} h='h2' style={{marginBottom:rp(2),marginTop:rp(1)}}/>
      <Heading h='h5' text={"What do you want to do today?"} style={{fontSize:rp(5),textAlign:"center",marginVertical:rp(2)}} />
        <View style={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:"center",marginTop:rp(10)}}>
            <TouchableOpacity onPress={()=>navigation.navigate("startscreen",{data:false})} style={{backgroundColor:colors.grey,width:100,height:50,borderRadius:rp(5),display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Heading h='h3' text={"Buy"}/>
                </TouchableOpacity>
                  <Heading text={""} style={{marginHorizontal:rp(2)}} h='h2'/>
                <TouchableOpacity onPress={()=>navigation.navigate("startscreen",{data:true})}  style={{backgroundColor:colors.grey,width:100,height:50,borderRadius:rp(5),display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Heading h='h3' text={"Sell"} />
                </TouchableOpacity>
        </View>
        <View style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:rp(2),marginTop:rp(10)}}>
           <View style={{padding:1,display:"flex",flexDirection:"row",alignItems:'center',borderWidth:1,borderColor:colors.black,borderRadius:rp(1),width:"98%"}}>
           <TouchableOpacity onPress={()=>settab(0)} style={{paddingHorizontal:rp(3),paddingVertical:rp(1.3),backgroundColor:tab===0?colors.black:colors.white,borderRadius:rp(1),width:"50%"}}>
                <BodyText color={tab===0?colors.white:colors.black} text={"Your Products"} size='m' style={{textAlign:"center",fontSize:rp(2.1)}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>settab(1)} style={{paddingHorizontal:rp(3),paddingVertical:rp(1),backgroundColor:tab===1?colors.black:colors.white,borderRadius:rp(1),width:"50%"}}>
            <BodyText color={tab===1?colors.white:colors.black} text={"Notifications"} style={{textAlign:"center",fontSize:rp(2.1)}} size='m'/>
            </TouchableOpacity>
           </View>
        </View>
{
   tab===0&&
        <View style={{height:130}}>
        <ScrollView  showsVerticalScrollIndicator={false}>
     <View style={{display:"flex",flexDirection:"column"}}>
            {
                [1,2,3,4].map((item,i)=>(
                    <OwnProduct key={i}/>
                ))
            }
        </View>
     
        </ScrollView>
        </View>
}
{
  tab===1&&
        <View style={{flex:1}}>
        <ScrollView  showsVerticalScrollIndicator={false}>
            <Notification/>
        </ScrollView>
        </View>
}
    </View>
    
    </Screen>
  )
}

const styles=StyleSheet.create({

})