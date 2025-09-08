import React, { useState } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

export default function Oito() {
  const [images, setImages] = useState<string[]>([]);

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permissão negada para acessar a galeria");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert("Permissão negada para acessar a câmera");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ quality: 1 });
    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={openGallery} style={styles.button}>
          <MaterialIcons name="photo" size={28} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera} style={styles.button}>
          <MaterialIcons name="photocamera" size={28} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {images.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.image} />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => removeImage(index)}
            >
              <MaterialIcons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    top: StatusBar.currentHeight || 20,
    right: 20,
    zIndex: 10,
  },
  button: { marginLeft: 15 },
  scroll: {
    paddingTop: (StatusBar.currentHeight || 20) + 50,
    alignItems: "center",
    paddingBottom: 20,
  },
  imageWrapper: {
    width: width * 0.9,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: width * 0.9,
    borderRadius: 10,
    resizeMode: "cover",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 4,
  },
});
