import { Link } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FocusButton } from '../components/FocusButton';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View style={styles.inner}>
        <Text style ={styles.title}>
          Otimize sua {'\n'} produtividade, 
        </Text>
          <Text style={styles.titleBold}>
            mergulhe no que {'\n'}importa
          </Text>
        <Image source={require('../assets/images/ImagemTelaInicial.png')} style={styles.image}/>
        <FocusButton
          title="Quero iniciar!"
          onPress={() => router.replace('/pomodoro')}
        />
      </View>
      <View style={styles.footer}>
      <Text style={styles.footerText}>
        Made by Augusto Bohm
      </Text>
    </View>
    </View>);
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 20,
    resizeMode: 'contain',
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  inner: {
    gap: 16,
    font: 'Unbounded',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    font: 'Unbounded',
  },
  titleBold: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footer: {
    height: '5%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})
