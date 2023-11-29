import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Pressable } from "react-native";
import { useState, useContext, useEffect } from 'react';
import { UtilsContext } from "./config/context";
import axios from 'axios';

const styles = StyleSheet.create({
    viewClass: {
        backgroundColor: "#E0E0E0",
        height: "100%"
    },
    titleText: {
        paddingTop: "2%",
        paddingLeft: "6%",
        fontFamily: "Comic Sans MS",
        fontSize: 60,
        fontWeight: 'bold',
    },
    box: {
        borderWidth: "1px",
        borderRadius: 5,
        marginHorizontal: "5%",
        marginTop: "5%"
    },
    labelText: {
        fontFamily: "Comic Sans MS",
        paddingLeft: "7%",
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
	touch1: {
        width: "75px",
        height: "35px",
        backgroundColor: "black",
        padding: "5px",
        borderRadius: "10px",
        marginRight: "15px",
        justifyContent: "center",
        alignItems: "center"
	},
});

function BoxAviso (props)
{

    return(
        <View style = {styles.box}>
            <Text style={styles.labelText}>Título: {props.titulo}</Text>
            <Text style={styles.labelText}>Informações: {props.info}</Text>
            <Text style={styles.labelText}>Data do aviso: {props.dataAviso}</Text>
            <Text style={styles.labelText}>Data de emissão: {props.dataCriado}</Text>
        </View>
    )
}

function UserModal (props)
{
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setModalVisible(!props.modalVisible);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.labelText}>Nome: {props.nome}</Text>
                    <Text style={styles.labelText}>Idade: {props.idade}</Text>
                    <Text style={styles.labelText}>Sexo: {props.sexo}</Text>
                    <Text style={styles.labelText}>Email: {props.email}</Text>
                    <Text style={styles.labelText}>Senha: {props.senha}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => props.setModalVisible(!props.modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export function Avisos(props)
{    
    var user = JSON.parse(sessionStorage.getItem("user"));

    const [lista, setLista] = useState("");

    async function getAviso()
    {
        try {
            await axios.get("http://localhost:8080/aviso").then((response) => {
                response.data.forEach(aviso => {
                    console.log("Data: ", aviso)
                })
                console.log(response.data)
                setLista(response.data);
            });
        }
        catch (error) {
            console.log("AAAAAAAAA",error);
        }
    }

    useEffect(() => {
        getAviso();
    },[])

    return(
        <View style = {styles.viewClass}>
            <TouchableOpacity style={styles.touch1} onPress = {() => props.navigation.navigate("HomeMorador")}>
                <Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch1} onPress = {() => props.navigation.navigate("HomeMorador")}>
                <Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Criar Aviso</Text>
            </TouchableOpacity>
            <FlatList
                data={lista}
                renderItem = {({item}) => <BoxAviso 
                    key = {item.id}
                    titulo = {item.titulo}
                    dataAviso = {item.dataAviso}
                    dataCriado = {item.dataCriado}
                    info = {item.info}
                />}
                keyExtractor={item => item.nome}
            />
        </View>
    )
}