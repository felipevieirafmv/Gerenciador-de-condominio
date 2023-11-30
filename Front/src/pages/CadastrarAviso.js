import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch, Button } from "react-native";
import axios from "axios";

const styles = StyleSheet.create({
    viewClass: {
        display: "flex",
        backgroundColor: "#E0E0E0",
        height: "100%",
    },
    labelText: {
        fontFamily: "Comic Sans MS",
        paddingLeft: "7%",
    },
    input: {
        backgroundColor: "white",
        height: 25,
        marginLeft: "7%",
        marginRight: "7%",
        marginBottom: "5%",
        borderRadius: 5,
        color: "#696969",
        fontFamily: "Comic Sans MS",
    },
    viewForm: {
        display: "flex",
        justifyContent: "flex-start",
    },
    viewButton: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cadastrarButton: {
        backgroundColor: "white",
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
        marginHorizontal: "10%",
        borderRadius: 5
    },
    cadastroButton: {
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "10%",
        marginBottom: "10px"
    },
    buttonText: {
        fontFamily: "Comic Sans MS",
        textAlign: "center"
    },
    viewDoubleInput: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: "7%"
    },
    viewOneDoubleInput: {
        marginBottom: "5%",
        width: "45%"
    },
    doubleInput: {
        backgroundColor: "white",
        height: 25,
        borderRadius: 5,
        color: "#696969",
        fontFamily: "Comic Sans MS",
    },
    viewSwitch: {
        paddingLeft: "7%",
        paddingBottom: "5%",
        display: "flex",
        flexDirection: 'row',
    },
    viewHeader: {
        backgroundColor: "white",
        paddingBottom: "5%",
        paddingTop: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textHeader: {
        fontFamily: "Comic Sans MS",
        justifyContent: "center",
    },
    
    titleText: {
        paddingTop: "17%",
        paddingBottom: "17%",
        fontFamily: "Comic Sans MS",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "center",
    },

});

export function CadastrarAviso(props)
{
    const [titulo, setTitulo] = useState("")
    const [info, setInfo] = useState("")
    const [dataAviso, setDataAviso] = useState("")
    
    const dataAtual = new Date();
    const opcoesFormatacao = { day: 'numeric', month: '2-digit', year: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacao);

    const postAviso = async(titulo, info, dataAviso) => {
        try {
            console.log("Data criado: ", dataFormatada.toString())
            const response = await axios.post("http://localhost:8080/aviso", {titulo, info, dataAviso, "dataCriado": dataFormatada.toString()})
            props.navigation.navigate("Avisos")
            console.log(response)
        }
        catch (error) {
            console.error(error);
        }
    }

    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Cadastrar Morador</Text>

            <View style = {styles.viewForm}>
                <TextInput
                    style = {styles.input}
                    value = {titulo}
                    placeholder = "Titulo"
                    onChangeText = {text => setTitulo(text)}
                />

                <TextInput
                    style = {styles.input}
                    value = {info}
                    placeholder = "Informações"
                    onChangeText = {text => setInfo(text)}
                />

                <TextInput
                    style = {styles.input}
                    value = {dataAviso}
                    placeholder = "Data do aviso"
                    onChangeText = {text => setDataAviso(text)}
                />

            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.cadastrarButton} onPress = {() => postAviso(titulo, info, dataAviso)}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("HomeSindico")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}