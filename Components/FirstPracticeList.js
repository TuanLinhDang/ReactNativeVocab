import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, Text, View, TextInput, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
class SecondPractice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: []
        }
    }

    render() {
        const { item, state, index } = this.props
        return (
                    <View style={styles.itemWrapper}>
                        <Text style={styles.meaning}>{item.meaning}</Text>
                        <Text style={styles.explaination}>{item.explaination}</Text>
                        <TextInput
                            style={state.isCheck ? this.state.answer[index] === item.word.toLowerCase() ?
                                styles.correctAnswer : styles.wrongAnswer : styles.normalAnswer}
                            placeholder="Type your answer"
                            onChangeText={text => {
                                let { answer } = this.state;
                                answer[index] = text.toLowerCase();
                                this.setState({
                                    answer
                                });
                            }}
                            value={this.state.answer[index]}
                        />
                    </View>
                
        )
    }
}

const styles = StyleSheet.create({
    itemWrapper: {
        alignSelf: "stretch",
        margin: 3,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgb(93, 110, 37)'
    },
    meaning: {
        color: '#304360',
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    explaination: {
        color: 'black',
        width: width - 20,
        textAlign: 'center',
        fontSize: 18
    },
    normalAnswer: {
        alignSelf: 'stretch',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        backgroundColor: 'rgb(234, 234, 236)',
        borderColor: 'black',
        borderStyle: 'solid',
        borderTopWidth: 1,
    },
    correctAnswer: {
        alignSelf: 'stretch',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgb(134, 164, 45)',
        borderColor: 'black',
        borderStyle: 'solid',
        borderTopWidth: 1,
    },
    wrongAnswer: {
        alignSelf: 'stretch',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'red',
        borderColor: 'black',
        borderStyle: 'solid',
        borderTopWidth: 1,
    },
    
})

export default SecondPractice