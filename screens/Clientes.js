import React from 'react';
import { View, Text , Button } from 'react-native';
import Titulo from '../components/Titulo';
import Cliente from '../components/Cliente';
export const Clientes = ({navigation}) => { 
    return(
    <View >
        <Titulo titulo="Clientes"/>
        <Cliente inicial="P"  nome="Priscilla" valortotal="39,50" navigation={navigation}/>
        <Cliente inicial="S"  nome="Silvia" valortotal="56,00" navigation={navigation}/>
        <Button title="Ir ate saldos"  onPress={() => navigation.navigate('Saldos')}/>
    </View>
    )

}
export default Clientes;