import React from 'react'
import {StyleSheet,View, Platform, Button, TouchableOpacity, FlatList, Text} from 'react-native'
import ShowModal from './../Components/ShowModal'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
class TopicWordList extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.item.TopicName,
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
            <Icon style={{marginLeft: 10}} name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                size={30}
                color="white"
                onPress={() => navigation.goBack(null)}
            />
        ),
        headerRight: (
            <View style={{flexDirection: "row",justifyContent: "space-evenly",width: 120}}>
                <Icon name={Platform.OS === "ios" ? "ios-bicycle" : "md-bicycle"}
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('PracticeWord', {words: navigation.getParam('words')})}
                />
                <Icon name="logo-buffer"
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('SpeakingSampleList', {item: navigation.state.params.item})}/>
            </View>
        )
    });
    
    constructor(props){
        super(props)
        this.state = {
            isVisible: false,
            word: '',
            words: ''
        }
    }

    componentWillMount(){
        var formData = new FormData()
        formData.append('idTopic', this.props.navigation.state.params.item.idTopic)
        axios.post('https://tuandang92.000webhostapp.com/server/word.php', formData)
        .then(data => {
            this.setState({
                words: data.data.words
            })
            this.props.navigation.setParams({ words: data.data.words})
        })
        .catch(err => {
            console.log(err)
        })
    }

    onShowModal(item) {
        this.setState({
            isVisible: true,
            word: item
        })
    }

    onCloseModal = () => {
        this.setState({
            isVisible: false
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.words}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {({item}) => 
                        <TouchableOpacity style={styles.itemWrapper}
                            onPress = {this.onShowModal.bind(this, item)}
                        >
                            <Text style={styles.text}>{item.word}</Text>
                        </TouchableOpacity>
                        
                    }
                />
                <ShowModal word = {this.state.word}
                    isVisible = {this.state.isVisible}
                    onCloseModal = {this.onCloseModal}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(192, 200, 201)'
    },
    itemWrapper: {
        alignSelf: "stretch",
        height: 70,
        margin: 3,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgb(93, 110, 37)'
    },
    text: {
        color: "#304360",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default TopicWordList