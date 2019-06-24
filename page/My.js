import React,{Component} from 'react';
import {Text,View,StyleSheet,SectionList,Platform } from 'react-native';
export default class My extends Component{
    constructor(props){
        super(props)
        this.state={
            dataArr:[
                {title:'第一组',data:['第1组第1个','第1组第2个','第1组第3个','第1组第4个']},
                {title:'第二组',data:['第2组第1个','第2组第2个','第2组第3个','第2组第4个']},
                {title:'第三组',data:['第3组第1个','第3组第2个','第3组第3个','第3组第4个']}           
        ]
        }
    }
    componentDidMount(){
        alert(Platform.Version)
    }
    render(){
        return(
            <View style={styles.box}>
                <SectionList
                    sections={this.state.dataArr}
                    renderItem={({item}) => <View style={{backgroundColor:'red',marginTop:10,height:100}}><Text style={{textAlign:'center',lineHeight:100}}>{item}</Text></View>}   
                    renderSectionHeader={({section:{title}}) => <View style={{backgroundColor:'green'}}><Text style={{textAlign:'center'}}>{title}</Text></View>} 
                    stickySectionHeadersEnabled={true}     
                    ListHeaderComponent = {()=><View><Text>lalalalalall</Text></View>}  
                    inverted={false}   
                    showsVerticalScrollIndicator={true} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        // justifyContent:'center',
        // alignItems: 'center',
    }
})