import React from 'react'
import {StyleSheet, Platform, Text, Button, View, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const {height, width} = Dimensions.get('window')
class SampleAnswer extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerStyle: {
            borderBottomWidth: 0,
        },
        headerLeft: (
            <Icon style={{marginLeft: 10}} name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                size={30}
                color='rgb(93, 110, 37)'
                onPress={() => navigation.goBack(null)}
            />
        )
    });
    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.question}>{this.props.navigation.state.params.item.question}</Text>
                    <View style={styles.devider}></View>
                </View>
                <Text style={styles.answer}>{this.props.navigation.state.params.item.answer}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    question: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(93, 110, 37)',
        fontSize: 20,
    },
    devider: {
        marginTop: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'rgb(93, 110, 37)',
        width: width - 30
    },
    answer: {
        margin: 10,
        color: 'black',
        fontSize: 18
    }
})

export default SampleAnswer