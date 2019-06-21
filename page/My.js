import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
export default class My extends Component{
    render(){
        return(
            <View style={styles.box}>
                <Text>This is My</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
})