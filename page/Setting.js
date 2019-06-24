import React,{Component} from 'react';
import {Text,View,StyleSheet,Animated} from 'react-native';
import Animateds from './animated';
export default class Setting extends Component{
    render(){
        return(
            <View style={styles.box}>
                <Text>This is Setting</Text>
                <Animateds style={{width:250,height:50,backgroundColor:'green'}}>
                   <Text style={{fontSize:40}}>我是动画</Text>
                </Animateds>
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