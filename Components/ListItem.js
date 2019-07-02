import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Dimensions, Text} from 'react-native'
var {height, width} = Dimensions.get('window')
class ListItem extends React.Component {
    render(){
        const {item} = this.props;
        return(
            <TouchableOpacity style={styles.wrapper}
                onPress = {() => this.props.navigate('WordListTopic', { item: item})}
                >
                <View style={styles.opacityWrapper}></View>
                <Image style={styles.image} source= {{uri: item.TopicImage}}/>
                <Text style={styles.text}>{item.TopicName}</Text>
            </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacityWrapper: {
        width: width,
        height: width/2,
        zIndex: 100,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    image:{
        width: width,
        height: width/2,
        position: 'absolute'
    },
    text: {
        fontSize: 25,
        padding: 20,
        backgroundColor: 'rgba(230, 230, 230, 0.3)',
        color: '#304360',
        zIndex: 1000,
        fontWeight: 'bold',
        position: 'absolute'
    }
})

export default ListItem