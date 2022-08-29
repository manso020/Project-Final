import React from 'react';
import { View,Text,Button} from 'react-native';

export const Cliente = (props) => {
    return(
<View>
<text>{props.inicial}</text>
<View>
    <Text>{props.nome}</Text>
    <Text>R${props.valortotal}</Text>
</View>
<Button title="remover"/>
</View>

    )
}
export default Cliente;