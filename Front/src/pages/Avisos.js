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

export function Avisos(props)
{    
    var user = JSON.parse(sessionStorage.getItem("user"));

    const [lista, setLista] = useState("");

    function goToHome()
    {
        if (user.adm == true)
            props.navigation.navigate("HomeSindico")
        else
            props.navigation.navigate("HomeMorador")
    }

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
            <TouchableOpacity style={styles.touch1} onPress = {() => goToHome()}>
                <Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Voltar</Text>
            </TouchableOpacity>
            {
                user.adm == true ?
                    <TouchableOpacity style={styles.touch1} onPress = {() => props.navigation.navigate("CadastrarAviso")}>
                        <Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Criar Aviso</Text>
                    </TouchableOpacity>
                : null
            }
            <FlatList
                data={lista}
                renderItem = {({item}) => <BoxAviso 
                    key = {item.id}
                    titulo = {item.titulo}
                    dataAviso = {item.dataAviso}
                    dataCriado = {item.dataCriado}
                    info = {item.info}
                />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}