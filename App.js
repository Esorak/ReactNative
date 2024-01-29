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
      setModalVisible(true);
  };
  
  const removeItem = (indexToRemove) => {
    setListItem(vieillelist => vieillelist.filter((item, index) => index !== indexToRemove));
  };
    const [modalVisible, setModalVisible] = useState(false);
  
  return (
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
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Etes vous sur?</Text>
            <View style={styles.align}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textValider}>valider</Text>
            </Pressable>
            <Pressable
              style={[styles.button2, styles.buttonClose2]}
              onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textRetour}>retour</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>

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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  image: {
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
  },

  textRetour: {
    color: '#FFF',
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },

  textValider: {
    color: '#FFF',
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },

  buttonClose2:{
    backgroundColor: '#777'
  },

  align: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});