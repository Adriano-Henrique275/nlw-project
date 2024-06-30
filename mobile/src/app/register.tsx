import { useState } from "react";
import { Input } from "@/components/input";
import { View, Image, Alert, StatusBar } from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link, router } from "expo-router";
import { api } from "@/server/api";
import axios from "axios";
import { useBadgeStore } from "@/store/badge-store";

const EVENT_ID = "9e9bd979-9d10-4915-b339-3786b1634f33";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const badgeStore = useBadgeStore();

  async function handelRegister() {

    try {

      if (!name.trim() || !email.trim()) {
        return Alert.alert("Incrição", "Preencha todos os campos!");
      }
  
      setIsLoading(true);

      const registerResponse = await api.post(`/events/${EVENT_ID}/attendees`, { name, email });
  
      if (registerResponse.data.attendeeId) {

        const badgeResponse = await api.get(`/attendees/${registerResponse.data.attendeeId}/badge`);

        badgeStore.save(badgeResponse.data.badge);

        Alert.alert("Incrição", "Inscrição realizada com sucesso!", [
          { text: "OK", onPress: () => router.push("/ticket")}
        ]);
      }

      
      
    } catch (error) {
      console.log(error);
      setIsLoading(false)

      if (axios.isAxiosError(error)) {
        if (
          String(error.response?.data.message).includes("Already registered")
        ) {
          return Alert.alert("Inscrição", "Este e-mail já está cadastrado!");
        }
      }

      Alert.alert("Incrição", "Não foi possível fazer a inscrição");
    } 

  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center">
      <StatusBar barStyle="light-content" />
      <Image 
        source={require("@/assets/logo.png")} 
        resizeMode="contain"  
        className="h-16"
      />
      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6 name="user-circle" size={20} color={colors.green[200]} />
          <Input.Field 
            placeholder="Nome Completo"
            onChangeText={setName}
          />
        </Input>
        <Input>
          <MaterialIcons name="alternate-email" size={20} color={colors.green[200]} />
          <Input.Field 
            placeholder="E-mail"
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </Input>
        <Button 
          title="Realizar inscrição" 
          onPress={handelRegister}
          isLoading={isLoading}
        />
        <Link href="/" className="text-gray-200 text-base font-bold text-center mt-8">Já não possui ingresso</Link>
      </View>
    </View>
  )
}