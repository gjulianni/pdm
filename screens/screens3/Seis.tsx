import React from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

export default function Seis() {
  const [imageUri, setImageUri] = React.useState<string | null>(null);

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted === false) {
      alert("Permissão negada para acessar a galeria");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      alert("Permissão negada para acessar a câmera");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
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

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

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
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    marginTop: (StatusBar.currentHeight || 20) + 50,
  },
});
