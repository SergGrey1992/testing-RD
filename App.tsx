import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Providers } from './global/providers';
import { AddCard } from './feature/card/ui/AddCard';
import { RemoveCard } from './feature/card/ui/RemoveCard';
import { CardsPreview } from './entities/card/ui/CardsPreview';

export default function App() {
  return (
    <Providers>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <View style={styles.buttonGroup}>
            <AddCard />
            <RemoveCard />
          </View>
          <CardsPreview />
        </View>
      </SafeAreaView>
    </Providers>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    marginBottom: 14,
  },
});
