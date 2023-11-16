import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context";

const styles = StyleSheet.create({
    viewClass: {
        display: "flex",
        backgroundColor: "#E0E0E0",
        height: "100%"
    },
    titleText: {
        paddingTop: "17%",
        paddingBottom: "17%",
        fontFamily: "Comic Sans MS",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "center",
    },
    buttonInfo: {
        backgroundColor: "white",
        height: 70,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "5%",
        borderRadius: 5
    },
    buttonText: {
        fontFamily: "Comic Sans MS",
        textAlign: "center",
        fontSize: 20,
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
    buttonGrid: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: "10%",
    },
    eachButton: {
        backgroundColor: "white",
        height: 90,
        width: "40%",
        display: "flex",
        justifyContent: "center",
        borderRadius: 5
    },
});

export function HomeSindico(props)
{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const {utils, setUtils} = useContext(UtilsContext)

    return(
        <View style = {styles.viewClass}>
            <View style = {styles.viewHeader}>
                <Text style = {styles.textHeader}>
                    Gerenciador de Condomínio
                </Text>
            </View>
            <Text style = {styles.titleText}>Bem-vindo(a) nome</Text>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.buttonInfo}>
                    <Text style = {styles.buttonText}>Informações gerais</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.buttonGrid}>
                <TouchableOpacity style={styles.eachButton}>
                    <Text style = {styles.buttonText}>Cadastrar um morador</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.eachButton}>
                    <Text style = {styles.buttonText}>Ler Denúncias ou Comentários</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.buttonGrid}>
                <TouchableOpacity style={styles.eachButton}>
                    <Text style = {styles.buttonText}>Criar uma eleição</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.eachButton}>
                    <Text style = {styles.buttonText}>Definir Mensalidade</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.buttonGrid}>
                <TouchableOpacity style={styles.eachButton}>
                    <Text style = {styles.buttonText}>Criar uma assembléia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.eachButton}>
                    <Text style = {styles.buttonText}>Histórico de atividades</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

