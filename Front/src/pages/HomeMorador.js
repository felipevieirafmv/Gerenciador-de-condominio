import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

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

export function HomeMorador(props)
{
    var session = JSON.parse(sessionStorage.getItem("user"));

    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Bem-vindo(a) {session.name}</Text>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.buttonInfo} onPress = {() => props.navigation.navigate("InformacoesMorador")}>
                    <Text style = {styles.buttonText}>Informações gerais</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.buttonGrid}>
                <TouchableOpacity style={styles.eachButton} onPress = {() => props.navigation.navigate("ReservaChurras")}>
                    <Text style = {styles.buttonText}>Reservar churrasqueira</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.eachButton}>
                    <Text style = {styles.buttonText}>Denúncia/ Comentário</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.buttonGrid}>
                <TouchableOpacity style={styles.eachButton} onPress = {() => props.navigation.navigate("Avisos")}>
                    <Text style = {styles.buttonText}>Avisos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.eachButton}>
                    <Text style = {styles.buttonText}>Mensalidade</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

