import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Platform, PermissionsAndroid } from "react-native";
import Contacts from "react-native-contacts";

interface Contact {
  recordID: string;
  givenName: string;
}

export default function Cinco() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const loadContacts = async () => {
      // Solicita permissão no Android
      if (Platform.OS === "android") {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: "Permissão para acessar contatos",
            message: "O app precisa acessar seus contatos.",
            buttonPositive: "OK",
          }
        );
        if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
          return;
        }
      }

      Contacts.getAll()
        .then((data) => {
 
          const firstNames = data.map((c) => ({
            recordID: c.recordID,
            givenName: c.givenName,
          }));
          setContacts(firstNames as any);
        })
        .catch((err) => console.log("Erro ao buscar contatos:", err));
    };

    loadContacts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primeiro nome dos contatos</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}
        renderItem={({ item }) => (
          <View style={styles.contactCard}>
            <Text style={styles.name}>{item.givenName}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  contactCard: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  name: { fontWeight: "bold", fontSize: 16 }
});
