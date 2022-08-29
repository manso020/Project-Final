import React from 'react';
import { View,Text,Button} from 'react-native';

export const Saldo= (props) => {
    return(
<View>
<text>{props.valor}</text>

<Button title="remover" onPress={() => props.navigation.navigate('Clientes')} />
</View>

    )
}
export default Saldo;