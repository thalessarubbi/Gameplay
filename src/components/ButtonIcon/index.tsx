import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

import DiscordImg from '../../assets/discord.png'

interface ButtonIconProps extends RectButtonProps {
  title: string
}

export function ButtonIcon({title, ...rest}: ButtonIconProps){

  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}