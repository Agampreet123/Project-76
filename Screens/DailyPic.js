import * as React from 'react';
import { View,Text, } from 'react-native';

export default class DailyPicScreen extends React.Component{
render(){
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>DailyPicScreen</Text>
        </View>
    )
}
}