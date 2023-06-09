import { View, Text,Pressable,ActivityIndicator ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Heading from "./Typography/Heading"
import BodyText from "./Typography/BodyText"
import { Image } from 'react-native-elements';

export default function OwnProduct({func=()=>{}}) {
  return (
    <Pressable onPress={func} style={{width:"98%",marginHorizontal:"1%",backgroundColor:"#32353d",marginBottom:rp(1.5),display:"flex",flexDirection:"row",borderRadius:rp(2),
    shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 3,
},
shadowOpacity:  0.17,
shadowRadius: 3.05,
elevation: 4
    }}>
        <View  style={{height:120,width:"40%",backgroundColor:colors.white,borderTopLeftRadius:rp(2),borderBottomLeftRadius:rp(2)}}>
        <Image style={{height:"100%",width:"100%"}} resizeMode='contain' source={require("../../assets/images/nike.jpg")} PlaceholderContent={<ActivityIndicator/>}/>
        </View>
     <View style={{width:"60%"}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:rp(1),marginVertical:rp(2)}}>
            <BodyText color={colors.white} text={"Nike Air Jorden"} h='h3'/>
          <TouchableOpacity>
          <MaterialIcons name="delete" size={24} color={colors.danger} />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft:rp(1)}}>
        <Heading color={colors.white} text={"Price € 300"} h='h4'/>
        </View>
     </View>
    </Pressable>
  )
}