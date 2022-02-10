import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { styles } from "./styles";

import DiscordImg from '../../assets/discord.png'

interface ButtonIconProps extends TouchableOpacityProps {
  title: string
}

export function ButtonIcon({title, ...rest}: ButtonIconProps){

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}