import { View, Text,Pressable,ActivityIndicator,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../helpers/colors'
import fonts from '../helpers/fonts'
import BodyText from './Typography/BodyText'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Entypo from "react-native-vector-icons/Entypo"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";

export default function DropDownMenu({data,selectedfunc,val}) {
    const[open,setopen]=React.useState(false)
  return (
    <View>
    <Pressable onPress={()=>setopen(!open)} style={{width:200,height:32,borderRadius:rp(.3),borderWidth:1,borderColor:colors.black,paddingHorizontal:rp(1),paddingVertical:rp(1),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
     <Text style={{fontFamily:fonts.mregular,fontSize:rp(2.2)}}>{val}</Text>
     <EvilIcons name="chevron-down" size={24} color={colors.lightblack} />
    </Pressable>
{
    open&&    <View style={{maxHeight:150,width:200,marginVertical:rp(2),borderWidth:1,borderColor:colors.lightblack,borderRadius:rp(.3)}}>
    <ScrollView showsVerticalScrollIndicator>
   
        {
            data.map((item,i)=>(
              <TouchableOpacity onPress={()=>{
                selectedfunc(item?.value)
                setopen(false)
              }} key={i}>
                  <BodyText size='m' key={i} text={item.key} style={{paddingHorizontal:rp(1),marginVertical:rp(1)}}/>
              </TouchableOpacity>
            ))
        }

    </ScrollView>
    </View>
}
    </View>
  )
}