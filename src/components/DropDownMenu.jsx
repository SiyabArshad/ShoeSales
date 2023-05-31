import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Animated, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../helpers/colors';
import fonts from '../helpers/fonts';
import BodyText from './Typography/BodyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { RFPercentage as rp, RFValue as rf } from 'react-native-responsive-fontsize';

export default function DropDownMenu({ data, selectedfunc, val }) {
  const [open, setOpen] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    const toValue = open ? 0 : 150;
    Animated.timing(animatedHeight, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setOpen(!open);
    });
  };

  return (
    <View>
      <Pressable onPress={toggleDropdown} style={{ width: 200, height: 32, borderRadius: rp(0.3), borderWidth: 1, borderColor: colors.black, paddingHorizontal: rp(1), paddingVertical: rp(0.5), display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontFamily: fonts.mregular, fontSize: rp(2) }}>{val}</Text>
        <EvilIcons name="chevron-down" size={24} color={colors.lightblack} />
      </Pressable>
      {open &&
      <Animated.View style={{ maxHeight: animatedHeight, width: 200, marginVertical: rp(2), borderWidth: 1, borderColor: colors.lightblack, borderRadius: rp(0.3), overflow: 'hidden' }}>
        <ScrollView showsVerticalScrollIndicator>
          {
            data.map((item, i) => (
              <TouchableOpacity
                onPress={() => {
                  selectedfunc(item?.value);
                  toggleDropdown();
                }}
                key={i}
              >
                <BodyText size="m" key={i} text={item.key} style={{ paddingHorizontal: rp(1), marginVertical: rp(1) }} />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </Animated.View>
}
    </View>
  );
}

