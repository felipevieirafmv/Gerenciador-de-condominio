import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch, Button } from "react-native";

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

export function Cadastro(props)
{
    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [sexo, setSexo] = useState("")
    const [vagas, setVagas] = useState("")
    const [bloco, setBloco] = useState("")
    const [apto, setApto] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [adm, setAdm] = useState(false)
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
                <TextInput
                    style = {styles.input}
                    value = {nome}
                    placeholder = "Nome"
                    onChangeText = {text => setNome(text)}
                />

                <View style = {styles.viewDoubleInput}>
                    <View style = {styles.viewOneDoubleInput}>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {dataNasc}
                            placeholder = "Data de Nascimento"
                            onChangeText = {text => setDataNasc(text)}
                        />
                    </View>
                    <View  style = {styles.viewOneDoubleInput}>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {sexo}
                            placeholder = "Sexo"
                            onChangeText = {text => setSexo(text)}
                        />
                    </View>
                </View>

                <TextInput
                    style = {styles.input}
                    value = {CPF}
                    placeholder = "CPF"
                    onChangeText = {text => setCPF(text)}
                />

                <View style = {styles.viewDoubleInput}>
                    <View style = {styles.viewOneDoubleInput}>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {bloco}
                            placeholder = "Bloco"
                            onChangeText = {text => setBloco(text)}
                        />
                    </View>
                    <View  style = {styles.viewOneDoubleInput}>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {apto}
                            placeholder = "Apto"
                            onChangeText = {text => setApto(text)}
                        />
                    </View>
                </View>

                <TextInput
                    style = {styles.input}
                    value = {email}
                    placeholder = "E-mail"
                    onChangeText = {text => setEmail(text)}
                />

                <TextInput
                    style = {styles.input}
                    value = {senha}
                    placeholder = "Senha"
                    onChangeText = {text => setSenha(text)}
                />

                <View style = {styles.viewDoubleInput}>
                    <View>
                        <Text style = {styles.labelText}>Adm:</Text>
                        <View style = {styles.viewSwitch}>
                            <Switch
                                onValueChange = {() => setAdm(!adm)}
                                value = {adm}
                                trackColor = {{false: "#757577", true: "#81b0ff"}}
                                thumbColor = {"#ffffff"}
                                activeThumbColor = {"#f4f3f4"}
                                style = {styles.styleSwitch}
                            />
                            <Text style = {styles.labelText}>{adm ? "Sim" : "Não"}</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {vagas}
                            placeholder = "Vagas"
                            onChangeText = {text => setVagas(text)}
                        />
                    </View>
                </View>

            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.cadastrarButton} onPress = {() => postUser(nome, idade)}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("HomeSindico")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}