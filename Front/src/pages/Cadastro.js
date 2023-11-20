import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch, Button } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context";

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
        borderRadius: 5
    },
    viewForm: {
        display: "flex",
        justifyContent: "flex-start",
    },
    viewButton: {
        display: "flex",
        justifyContent: "flex-end",
    },
    loginButton: {
        backgroundColor: "white",
        height: 50,
        display: "flex",
        justifyContent: "center",
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
        borderRadius: 5
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

export function Cadastro(props)
{
    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [sexo, setSexo] = useState("")
    const [vagas, setVagas] = useState("")
    const [bloco, setBloco] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [notificacao, setNotificacao] = useState(false)
    const {utils, setUtils} = useContext(UtilsContext)

    function goToUsuario()
    {
        if(utils.dados)
        {
            setUtils({...utils, dados: [...utils.dados, {
                nome: nome,
                idade: idade,
                sexo: sexo,
                email: email,
                senha: senha,
                notificacao: notificacao}
            ]})
        }
        else
        {
            setUtils({...utils, dados: [{
                nome: nome,
                idade: idade,
                sexo: sexo,
                email: email,
                senha: senha,
                notificacao: notificacao}
            ]})
        }
    }

    return(
        <View style = {styles.viewClass}>
            <View style = {styles.viewHeader}>
                <Text style = {styles.textHeader}>
                    Gerenciador de Condomínio
                </Text>
            </View>

            <Text style = {styles.titleText}>Cadastrar Morador</Text>

            <View style = {styles.viewForm}>
                <Text style = {styles.labelText}>Nome:</Text>
                <TextInput
                    style = {styles.input}
                    value = {nome}
                    onChangeText = {text => setNome(text)}
                />

                <Text style = {styles.labelText}>CPF:</Text>
                <TextInput
                    style = {styles.input}
                    value = {CPF}
                    onChangeText = {text => setCPF(text)}
                />

                <View style = {styles.viewDoubleInput}>
                    <View style = {styles.viewOneDoubleInput}>
                        <Text style = {{fontFamily: "Comic Sans MS"}}>Data de nascimento:</Text>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {dataNasc}
                            onChangeText = {text => setDataNasc(text)}
                        />
                    </View>
                    <View  style = {styles.viewOneDoubleInput}>
                        <Text style = {{fontFamily: "Comic Sans MS"}}>Sexo:</Text>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {sexo}
                            onChangeText = {text => setSexo(text)}
                        />
                    </View>
                </View>

                <Text style = {styles.labelText}>Quantidade de vagas:</Text>
                <TextInput
                    style = {styles.input}
                    value = {vagas}
                    onChangeText = {text => setVagas(text)}
                />

                <View style = {styles.viewDoubleInput}>
                    <View style = {styles.viewOneDoubleInput}>
                        <Text style = {{fontFamily: "Comic Sans MS"}}>Bloco:</Text>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {bloco}
                            onChangeText = {text => setBloco(text)}
                        />
                    </View>
                    <View  style = {styles.viewOneDoubleInput}>
                        <Text style = {{fontFamily: "Comic Sans MS"}}>Apto:</Text>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {sexo}
                            onChangeText = {text => setSexo(text)}
                        />
                    </View>
                </View>

                <Text style = {styles.labelText}>E-mail:</Text>
                <TextInput
                    style = {styles.input}
                    value = {email}
                    onChangeText = {text => setEmail(text)}
                />

                <Text style = {styles.labelText}>Senha:</Text>
                <TextInput
                    style = {styles.input}
                    value = {senha}
                    onChangeText = {text => setSenha(text)}
                />

                <Text style = {styles.labelText}>Adm:</Text>
                <View style = {styles.viewSwitch}>
                    <Switch
                        onValueChange = {() => setNotificacao(!notificacao)}
                        value = {notificacao}
                        trackColor = {{false: "#757577", true: "#81b0ff"}}
                        thumbColor = {"#ffffff"}
                        activeThumbColor = {"#f4f3f4"}
                        style = {styles.styleSwitch}
                    />
                    <Text style = {styles.labelText}>{notificacao ? "Sim" : "Não"}</Text>
                </View>

            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.loginButton} onPress = {() => postUser(nome, idade)}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("HomeSindico")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}