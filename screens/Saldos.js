import React from 'react';
import { View, Text ,Button} from 'react-native';
import Titulo from '../components/Titulo';
import Saldo from '../components/Saldo';

export const Saldos = ({navigation}) => { 
    return(
    <View >
        <Titulo titulo="Saldos" />

        <Button title="Ir ate Clientes"  onPress={() => navigation.navigate('Clientes')}/>
   <Saldo valor="89,00" navigation={navigation}/>
   <Saldo valor="25,40" navigation={navigation}/>
   <Saldo valor="10,00"navigation={navigation}/>
 
   
    </View>
    )

}
export default Saldos;