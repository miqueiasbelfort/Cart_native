import {createStackNavigator} from "@react-navigation/stack"

import Home from "../pages/Home"
import Cards from "../pages/Cards"

const Stack = createStackNavigator()

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Cards"
                component={Cards}
                options={{
                    headerTitle: 'Meu Carrinho'
                }}
            />
        </Stack.Navigator>
    )
}