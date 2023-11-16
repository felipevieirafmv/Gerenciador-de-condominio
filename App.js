import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {Login} from "./src/pages/Login"
import {HomeMorador} from "./src/pages/HomeMorador"
import {HomeSindico} from "./src/pages/HomeSindico"
import {UtilsContext} from "./src/pages/config/context"
import { useState } from "react"

export default function App() {
	const [utils, setUtils] = useState({})
	const Stack = createStackNavigator()
	return(
		<NavigationContainer>
			<UtilsContext.Provider value = {{utils, setUtils}}>
				<Stack.Navigator>
					<Stack.Screen name = "HomeSindico" options = {{headerShown: false}} component = {HomeSindico} />
					<Stack.Screen name = "HomeMorador" options = {{headerShown: false}} component = {HomeMorador} />
					<Stack.Screen name = "Login" options = {{headerShown: false}} component = {Login} />
				</Stack.Navigator>
			</UtilsContext.Provider>
		</NavigationContainer>
	);
}