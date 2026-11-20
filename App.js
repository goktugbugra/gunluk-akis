import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const STORIES = [
  { id: "1", section: "GÜNDEM", title: "Günün öne çıkan gelişmeleri", body: "Bu portföy örneği yerel içerikle çalışır; sunucu, giriş veya veritabanı bağlantısı gerektirmez." },
  { id: "2", section: "TEKNOLOJİ", title: "Dijital ürünlerde sade deneyim", body: "React Native bileşenleriyle hazırlanmış okunabilir ve mobil odaklı bir haber akışı." },
  { id: "3", section: "YAŞAM", title: "Hafta sonu rehberi", body: "Kart yapısı, yeni bir API katmanı eklenecek şekilde genişletilmeye hazırdır." },
];

export default function App() {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.kicker}>ÖRNEK UYGULAMA</Text>
        <Text style={styles.heading}>Günlük Akış</Text>
        <Text style={styles.subtitle}>Seçilmiş içerikler, tek ekranda.</Text>
      </View>
      <FlatList
        data={STORIES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.section}>{item.section}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#F8FAFC" },
  header: { backgroundColor: "#FFFFFF", paddingHorizontal: 24, paddingVertical: 28 },
  kicker: { color: "#2563EB", fontSize: 12, fontWeight: "700", letterSpacing: 1.4 },
  heading: { color: "#0F172A", fontSize: 30, fontWeight: "800", marginTop: 6 },
  subtitle: { color: "#64748B", fontSize: 16, marginTop: 6 },
  list: { gap: 14, padding: 20 },
  card: { backgroundColor: "#FFFFFF", borderColor: "#E2E8F0", borderRadius: 18, borderWidth: 1, padding: 18 },
  section: { color: "#2563EB", fontSize: 12, fontWeight: "700", marginBottom: 8 },
  title: { color: "#0F172A", fontSize: 20, fontWeight: "700", lineHeight: 27 },
  body: { color: "#475569", fontSize: 15, lineHeight: 22, marginTop: 8 },
});
