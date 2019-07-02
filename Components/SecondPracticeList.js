import React from 'react'
import { StyleSheet, FlatList, Text, View, TextInput } from 'react-native'

class SecondPracticeList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            answer: []
        }
    }
    render() {
        const {item, state, index} = this.props
        return (
            <View style={styles.itemWrapper}>
                <Text style={styles.example}>{item.example}</Text>
                <TextInput
                    style={state.isCheck ? this.state.answer[index] === item.word.toLowerCase() ?
                        styles.correctAnswer : styles.wrongAnswer : styles.normalAnswer}
                    placeholder="Type your answer"
                    onChangeText={text => {
                        let { answer } = this.state;
                        answer[index] = text.toLowerCase();
                        this.setState({
                            answer,
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
    example: {
        color: 'black',
        padding: 5,
        fontSize: 20,
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

export default SecondPracticeList