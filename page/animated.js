import React ,{Component} from 'react';
import {Animated, Text,View,Easing} from 'react-native'

export default class Animateds extends Component{
    state={
        xPosition:new Animated.Value(1),
    }

    componentDidMount(){
                              // 开始执行动画
        }

    render(){
        Animated.timing(                  // 随时间变化而执行动画
            this.state.xPosition, {
                toValue: 100,
                easing: Easing.back(5),
                duration: 2000
              }
          ).start();  
        let self = this;
        return(
            <Animated.View style={{...this.props.style,marginLeft:self.state.xPosition}}>
                {this.props.children}
            </Animated.View>
        )
    }
}