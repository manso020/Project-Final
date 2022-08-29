import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Clientes from './screens/Clientes';
import Saldos from './screens/Saldos';

const Stack = createStackNavigator();
export default function App() {
    return ( 
    <NavigationContainer>
        <Menu />
    </NavigationContainer>
    );
}
const Menu = () => {
    return (
<Stack.Navigator initialRouteName="Clientes" screenOptions={() => ({headerShown: false})}>
<Stack.Screen name="Clientes" component= {Clientes} />
<Stack.Screen name="Saldos" component= {Saldos}/>
</Stack.Navigator>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

