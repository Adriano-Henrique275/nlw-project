import { View, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { QRCode } from "@/components/qrcode";
import { BadgeStore } from "@/store/badge-store";
import { MotiView } from "moti";

type props = {
  data: BadgeStore
  onChangeAvatar?: () => void
  onShowQRCode?: () => void
}

export function Credential({ data ,onChangeAvatar, onShowQRCode }: props) {
  return (
    <MotiView className="w-full self-stretch items-center">
      <Image 
        source={ require("@/assets/ticket/band.png")}
        className="w-24 h-52 z-10"
      />

      <View 
        className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5"
      >
        <ImageBackground
          source={ require("@/assets/ticket/header.png")}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text
              className="text-white text-sm font-bold"
            >{data.eventTitle}</Text>
            <Text
              className="text-white text-sm font-bold"
            >#{data.id}</Text>
          </View>
          <View className="w-40 h-40 bg-black rounded-full"/>
        </ImageBackground>

        { data.image 
          ? 
         ( 
            <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar} >
              <Image 
                source={{ uri: data.image }}
                className="w-36 h-36 rounded-full -mt-24"
              />
            </TouchableOpacity>
          )
          :
          (
            <TouchableOpacity 
              activeOpacity={0.9} 
              className="w-36 h-36 rounded-full -mt-24 bg-gray-300 items-center justify-center"
              onPress={onChangeAvatar}
            >
              <Feather name="camera" color={colors.green[400]} size={32} />
            </TouchableOpacity>
          )
        }

        <Text className="font-bold text-2xl text-white mt-4">{data.name}</Text>
        <Text className="font-regular text-base text-gray-300 mb-4">{data.email}</Text>
        
        <QRCode value={data.checkInURL} size={120}/>

      <TouchableOpacity activeOpacity={0.7} className="mt-6s" onPress={onShowQRCode}>
        <Text className="font-body text-sm text-orange-500 mt-4">Ampliar QRcode</Text>
      </TouchableOpacity>
      </View>
    </MotiView>
  )
}