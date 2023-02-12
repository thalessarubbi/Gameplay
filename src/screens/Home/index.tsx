import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Load } from "../../components/Load";
import { Profile } from "../../components/Profile";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";

import { styles } from "./styles";

export function Home() {
  const { navigate } = useNavigation()

  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])
  const [category, setCategory] = useState('')

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentsDetails(guildSelected: AppointmentProps) {
    navigate("AppointmentDetails", { guildSelected })
  }

  function handleCreateAppointmentPressed() {
    navigate("AppointmentCreate")
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []

    if (category) {
      setAppointments(storage.filter(item => item.category === category))
    } else {
      setAppointments(storage)
    }

    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadAppointments()
  }, [category]))

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

      {
        loading ? <Load /> :
          <>
            <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />

            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              style={styles.matches}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
              renderItem={({ item }) =>
                <Appointment
                  onPress={() => handleAppointmentsDetails(item)}
                  data={item} />
              }
            />
          </>
      }
    </Background>
  )
}