import React from "react";
import { FlatList, View } from "react-native";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Rumo ao topo',
      icon: 'image.png',
      owner: false
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            handleGuildSelected={handleGuildSelected}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  )
}