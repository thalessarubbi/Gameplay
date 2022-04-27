import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Guild } from "../../components/Guild";
import { Load } from "../../components/Load"
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";
import { api } from "../../services/api";

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
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  }, [])

  return (
    <View style={styles.container}>
      {
        loading ? <Load /> :
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
      }
    </View>
  )
}