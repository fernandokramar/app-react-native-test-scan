import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import Scanner from './src/components/Scanner'

export default function App() {
  const[modalVisible, setModalVisisble] = React.useState(false);
  const onCodeScanned = (type: any, data: any) => {
    console.log([data, type]);
  }

  return (
    <View style={styles.container}>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisisble(false)}
        >
          <View style={styles.modal}>
              <Scanner onCodeScanned={onCodeScanned} />
              <Button title='Cancel' onPress={() => setModalVisisble(false)}></Button>
          </View>
        </Modal>

          <StatusBar style='auto'/>
          <Button title='Scan' onPress={() => setModalVisisble(true)}></Button>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal:{
    flex: 1,
    alignItems:"center",
    justifyContent:"space-around",
    margin:24,
    borderRadius:8,
    backgroundColor:"black",
    marginVertical:64,
  }
});
