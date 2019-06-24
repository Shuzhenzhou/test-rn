import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,PixelRatio,Dimensions,Alert,Button,TouchableOpacity,FlatList} from 'react-native';
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgUrl:null,
            dataArr:[
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
                {key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"},
            ]
        }
    }
    componentDidMount(){
        let self = this;
        fetch('https://v1.itooi.cn/netease/song?id=37239038')
            .then((res) => res.json())
            .then((data) => {
                let info = data.data.songs[0];
                let imgUrl = info.al.picUrl;
                self.setState({imgUrl:imgUrl})
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    createItem(item){
        return(
            <View style={{padding:pTd(10)}}>
                <Image source={{uri:item.key}} style={{width:pTd(355),height:200}}/>
            </View>
        )
    }

    createSeparatorComponent(){
        return(
            <View style={{height:pTd(10),backgroundColor:'red'}}></View>
        )
    }

    ListHeaderComponent (){
        return(
            <View>
               <Text style={{fontSize:pTd(40),textAlign:'center'}}>这是头部</Text>
            </View>
        )
    }
    ListFooterComponent (){
        return(
            <View>
               <Text style={{fontSize:pTd(40),textAlign:'center'}}>这是尾巴</Text>
            </View>
        )
    }
    ListEmptyComponent (){
        return(
            <View>
        <Text>
            数据为空啦！不存在的！
        </Text>
    </View>

        )
    }

    onEndReached (){
        const newData = this.state.dataArr.concat({key:"http://p1.music.126.net/oc_p98jXIWPLjVAS-y-7kQ==/3421680187176215.jpg"});
        this.setState({dataArr:newData})

    }
    render(){
        const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
        const px2dp = px=>PixelRatio.roundToNearestPixel(px);
        let win_width = Dimensions.get("window").width;
        let win_height = Dimensions.get("window").height;
        
        console.log(win_height,win_width)
        return(
            <View style={styles.box}>
                <FlatList
                // horizontal={true}
                initialNumToRender={2}
                  style={{backgroundColor:'green',flex:1}}
                  ItemSeparatorComponent={this.createSeparatorComponent}
                  ListHeaderComponent ={this.ListHeaderComponent }
                  ListFooterComponent={this.ListFooterComponent}
                  ListEmptyComponent ={this.ListEmptyComponent }
                  numColumns={2}
                  onEndReachedThreshold={1}
                  onEndReached={()=>{this.onEndReached()}}
                  data={this.state.dataArr}
                  renderItem={({item,i}) => this.createItem(item)}
                  getItemLayout={(data, index) => (
                    {length: 200, offset: 200 * index, index}
                  )}
                />
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:'red'
        
    }
})




// 设备宽度，单位 dp
const deviceWidthDp = Dimensions.get('window').width;

// 设计稿宽度（这里为640px），单位 px
const uiWidthPx = 750;

// px 转 dp（设计稿中的 px 转 rn 中的 dp）
const pTd = (uiElePx) => {
  return uiElePx * deviceWidthDp / uiWidthPx;
}