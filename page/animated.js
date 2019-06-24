import React ,{Component} from 'react';
import {Animated, Text,View} from 'react-native'

export default class Animateds extends Component{
    state={
        fadeAnim:new Animated.Value(0),
    }

    componentDidMount(){
        console.log(this.props)
        Animated.timing(
            {
                toValue:1,
                duration:10000
            }.start(0)
        )
    }

    render(){
        return(
            <Animated.View style={{...this.props.style}}>
                {this.props.children}
            </Animated.View>
        )
    }
}