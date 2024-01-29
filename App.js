import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  Button,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  Alert,
  Modal,
  Pressable,
} from 'react-native';

 
export default function App() {
  const image = {uri: 'https://i.imgur.com/EaKhJ3H.jpeg'};
  const MonTitre = "Liste de truc a faire";
  const items = [
    "avoir une maison au japon",
    "devenir proffeseur", 
    "etre scientifique",
    "etre philosophe", 
    "etre vieux, riche et sage", 
    ];

  const [text,setText] = useState('');
  const [listItem, setListItem] = useState(items);


  const onPressButton = () => {
      setListItem(vieillelist => [...vieillelist, text]);
      setText('');
  };
  
  const removeItem = (indexToRemove) => {
    setListItem(vieillelist => vieillelist.filter((item, index) => index !== indexToRemove));
  };
  
  
  return (

  //   <Modal
  //   animationType="slide"
  //   transparent={true}
  //   visible={modalVisible}
  //   onRequestClose={() => {
  //     Alert.alert('Modal has been closed.');
  //     setModalVisible(!modalVisible);
  //   }}>
  //   <View style={styles.centeredView}>
  //     <View style={styles.modalView}>
  //       <Text style={styles.modalText}>Hello World!</Text>
  //       <Pressable
  //         style={[styles.button, styles.buttonClose]}
  //         onPress={() => setModalVisible(!modalVisible)}>
  //         <Text style={styles.textStyle}>Hide Modal</Text>
  //       </Pressable>
  //     </View>
  //   </View>
  // </Modal>


    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.MonTitre}>
          {MonTitre}
        </Text>
  
        <View style={styles.header}>
          <TextInput
            placeholder="une autre tache?"
            keyboardAppearance="dark"
            keyboardType="default"
            onChangeText={(newText) => setText(newText)}
            value={text}
          />
          <Button
            title="Add a la liste"
            color="#841584"
            onPress={onPressButton}
          />
        </View>
  
        {listItem.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.itemText}  onPress={() => removeItem(index)}  >{item}</Text>
        </View>
      ))}
  
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    color: '#FFF',
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  header: {
    fontSize: 40,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 40,
  },

  MonTitre: {
    fontSize: 20,
    textAlign: 'center', 
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    width: windowWidth,
  },

  items: {
    marginTop: 15,
    color: '#ff0000',
  },

  item :{

    color : '#ff0000',
  }
});