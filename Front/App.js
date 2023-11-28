import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import {Login} from "./src/pages/Login"
import {HomeMorador} from "./src/pages/HomeMorador"
import {HomeSindico} from "./src/pages/HomeSindico"
import {ReservaChurras} from "./src/pages/ReservaChurras"
import {Cadastro} from "./src/pages/Cadastro"

export default function App() {
	const Stack = createStackNavigator()

	function logOut() {
		sessionStorage.clear();
		window.location.reload(false);
	}

	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name = "Login" options = {{headerShown: false}} component = {Login} />
				<Stack.Screen name = "Cadastro"
					options = {{
						title: 'Síndico', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logOut()}
							>
								<Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Sair</Text>
							</TouchableOpacity>
						)
					}} component = {Cadastro} />

				<Stack.Screen name = "ReservaChurras"
					options = {{
						title: 'Morador', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logOut()}
							>
								<Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Sair</Text>
							</TouchableOpacity>
						)
					}} component = {ReservaChurras} />

				<Stack.Screen name = "HomeSindico"
					options = {{
						title: 'Síndico', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logOut()}
							>
								<Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Sair</Text>
							</TouchableOpacity>
						)
					}} component = {HomeSindico} />

				<Stack.Screen name = "HomeMorador"
					options = {{
						title: 'Morador', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logOut()}
							>
								<Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Sair</Text>
							</TouchableOpacity>
						)
					}} component = {HomeMorador} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
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