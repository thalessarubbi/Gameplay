import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { GuildProps } from "../../screens/Guilds";
import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export type Guild = {
  id: string
  name: string
  icon: string | null
  owen: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guild({ data, handleGuildSelected, ...rest }: Props) {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => handleGuildSelected(data)}
      {...rest}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>

  )
}