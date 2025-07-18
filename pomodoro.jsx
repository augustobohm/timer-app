import { useState, useRef } from "react";
import {Image, StyleSheet, View, Text, Pressable } from "react-native";
import { FocusButton } from "../components/FocusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";
import { IconPlay, IconPause } from "../components/icons";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('../assets/images/pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('../assets/images/short.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('../assets/images/long.png'),
    display: 'Pausa longa'
  },
]

export default function Pomodoro() {

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);
  
  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear()
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      // pausar
      clear()
      return;
    }

    setTimerRunning(true);
  const id = setInterval(() => {
    setSeconds(oldState => {
      if (oldState === 0) {
        clear();
        return timerType.initialValue;
      }
      return oldState - 1;
    })
  }, 1000)
  timerRef.current = id
  };


  return (
    <View style={styles.container}>
        <Image source={timerType.image} style={styles.image}/>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id}
              active={ timerType.id === p.id }
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds}/>
          <FocusButton
            title={timerRunning ? 'Pausar' : 'Começar'}
            icon = {timerRunning ? <IconPause /> : <IconPlay/>}
            onPress={toggleTimer}
          />
      </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Made by Augusto Bohm
      </Text>
    </View>
    </View>
  );
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
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
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