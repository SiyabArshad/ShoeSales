import { View, Text } from 'react-native'
import React from 'react'
import colors from "../../helpers/colors"
import fonts from "../../helpers/fonts"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
const fontSizeMapping = {
    h1: 4.5,
    h2: 4,
    h3: 3.5,
    h4: 3,
    h5: 2.5,
    h6: 2,
  };
export default function Heading({text,color=colors.black,h="h1",style}) {
    const fontSize = fontSizeMapping[h] || fontSizeMapping.h1; // Default to h1 if the heading level is not found in the mapping
  return (
    <Text style={[{color:color,fontFamily:fonts.mbold,fontSize:rp(fontSize)},style]}>
        {
            text
        }
    </Text>
  )
}