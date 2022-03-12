import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const { navigate } = useNavigation()

  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
  ]

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentsDetails() {
    navigate("AppointmentDetails")
  }

  function handleCreateAppointmentPressed() {
    navigate("AppointmentCreate")
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleCreateAppointmentPressed} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelected}
      />

      <ListHeader title="Partidas agendadas" subtitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.matches}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
        renderItem={({ item }) =>
          <Appointment
            onPress={handleAppointmentsDetails}
            data={item} />
        }
      />
    </Background>
  )
}