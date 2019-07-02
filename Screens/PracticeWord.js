import React from 'react'
import { StyleSheet, Alert, Platform, TouchableOpacity, Text, FlatList, View, TextInput, KeyboardAvoidingView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import FirstPracticeList from '../Components/FirstPracticeList'
import SecondPracticeList from '../Components/SecondPracticeList'
class PracticeWord extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Lets Practice",
        headerStyle: {
            backgroundColor: 'rgb(93, 110, 37)'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 25,
            fontFamily: 'American Typewriter'
        },
        headerLeft: (
            <Icon style={{ marginLeft: 10 }} name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                size={30}
                color="white"
                onPress={() => navigation.goBack(null)}
            />
        ),
        headerRight: (
            <Icon style={{ marginRight: 10 }}
                name={Platform.OS === "ios" ? "ios-swap" : "md-swap"}
                size={30}
                color="white"
                onPress={() => navigation.getParam('swapPratice')()}
            />
        )
    });
    constructor(props) {
        super(props)
        this.state = {
            arrayShuffle: [],
            isCheck: false,
            isSwap: true,
            answer: [],
            count: 0,
            marginLeft: -1000
        }
    }
    componentWillMount() {
        this.setState({
            arrayShuffle: this.shuffle(this.props.navigation.state.params.words)
        })
        this.props.navigation.setParams({
            swapPratice: this.swapPratice
        })
    }

    swapPratice = () => {
        this.setState({
            isSwap: !this.state.isSwap,
            arrayShuffle: this.shuffle(this.state.arrayShuffle)
        })
    }

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    checkAnswer = () => {
        this.setState({
            isCheck: true
        })
    }
    render() {
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 + 40 : 0
        const { arrayShuffle, answer, isCheck, isSwap } = this.state
        return (
            <KeyboardAvoidingView
                behavior={Platform.select({android: undefined, ios: 'padding'})}
                style={styles.container}
                keyboardVerticalOffset={keyboardVerticalOffset}
            >
                <FlatList
                    data={arrayShuffle}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        isSwap ?
                            <FirstPracticeList item={item} state={this.state} index={index} showAlert={this.showAlert} />
                            :
                            <SecondPracticeList item={item} state={this.state} index={index} />
                    }
                    ListFooterComponent={() =>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.checkAnswer}
                        >
                            <Text style={styles.textButton}>Check Answer</Text>
                        </TouchableOpacity>
                    }
                />
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(192, 200, 201)',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#f70019',
        padding: 10,
        margin: 3,
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default PracticeWord