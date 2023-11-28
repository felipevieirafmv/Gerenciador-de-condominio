import React from "react";
import { Button } from 'react-native-paper';
import { useState, useContext, useCallback } from 'react';
import { UtilsContext } from "./config/context";
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

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

// function getDate() {
//     const today = new Date();
//     const month = today.getMonth() + 1;
//     const year = today.getFullYear();
//     const date = today.getDate();
//     return `${month}/${date}/${year}`;
// }

export function ReservaChurras(props) 
{
    const [date, setDate] = useState(undefined);
    const [open, setOpen] = useState(false);
    const { utils, setUtils } = useContext(UtilsContext)

    var session = JSON.parse(sessionStorage.getItem("user"));

    const Dates = []

    async function getReserva()
    {
        try {
            await axios.get("http://localhost:8080/reserva").then((response2) => {
                response2.data.forEach(dates => {
                    console.log("dates.diaReservado",dates.diaReservado)
                    Dates.push(new Date(dates.diaReservado))
                })
                Dates.forEach(date => {
                    date.setDate(date.getDate() + 1)
                });
                console.log("Dates",Dates)
            });
        }
        catch (error) {
            console.log("AAAAAAAAA",error);
        }
    }

    getReserva();

    const postReserva = async(id, diaReservado) => {
        try {
            const response = await axios.post("http://localhost:8080/reserva", {user:{id}, reserva:{diaReservado}})
            console.log(response)
        }
        catch (error) {
            console.error(error);
        }
    }

    const onDismissSingle = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date);
            console.log("Id: ", session.id)
            console.log("Data: ", params.date)
            postReserva(session.id, params.date)
        },
        [setOpen, setDate]
    );

    return (
        <View style={styles.viewClass}>
            <SafeAreaProvider>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                    <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                        Escolha uma data
                    </Button>
                    <DatePickerModal
                        validRange={{ startDate: new Date(), disabledDates: Dates }}
                        locale="pt"
                        mode="single"
                        visible={open}
                        onDismiss={onDismissSingle}
                        date={date}
                        onConfirm={onConfirmSingle}
                    />
                </View>
            </SafeAreaProvider>
        </View>
    )
}

