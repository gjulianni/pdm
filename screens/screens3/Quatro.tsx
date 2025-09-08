import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, PermissionsAndroid, Platform } from "react-native";
import Contacts from "react-native-contacts";

interface Contact {
  recordID: string;
  givenName: string;
  familyName?: string;
  phoneNumbers: { number: string }[];
}

export default function Cinco() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const loadContacts = async () => {
      if (Platform.OS === "android") {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: "Permissão para acessar contatos",
            message: "O app precisa acessar seus contatos.",
            buttonPositive: "OK"
          }
        );
        if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
          return;
        }
      }

      Contacts.getAll()
        .then((data) => {
 
          const filtered = data.filter((c) => c.givenName?.toUpperCase().startsWith("C"));
          if (filtered.length > 0) {
            setContacts(filtered as any);
          }
        })
        .catch((err) => console.log("Erro ao buscar contatos:", err));
    };

    loadContacts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos que começam com C</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}
        renderItem={({ item }) => (
          <View style={styles.contactCard}>
            <Text style={styles.name}>{item.givenName} {item.familyName}</Text>
            {item.phoneNumbers.map((p, idx) => (
              <Text key={idx}>{p.number}</Text>
            ))}
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
