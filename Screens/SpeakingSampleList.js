import React from 'react'
import {StyleSheet, Text, Platform, Button, View, FlatList, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
class SpeakingSampleList extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.item.TopicName + ' Sample',
        headerStyle: {
            backgroundColor: 'rgb(93, 110, 37)'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 18,
            fontFamily: 'American Typewriter'
          },
        headerLeft: (
            <Icon style={{marginLeft: 10}} name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                size={30}
                color = "white"
                onPress={()=> navigation.goBack(null)}
            />
        )
    });

    constructor(props){
        super(props)
        this.state = {
            speakingList: []
        }
    }

    componentWillMount(){
        var formData = new FormData()
        formData.append('idTopic', this.props.navigation.state.params.item.idTopic)
        axios.post('https://tuandang92.000webhostapp.com/server/speakingList.php', formData)
        .then(data => {
            this.setState({
                speakingList: data.data.speakingList
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data = {this.state.speakingList}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {({item}) =>
                        <TouchableOpacity style={styles.itemWrapper}
                            onPress = {() => this.props.navigation.navigate('SampleAnswer', {item: item})}    
                        >
                            <Text style={styles.question}>{item.question}</Text>
                            <Text style={styles.summary}>{item.summary}</Text>
                        </TouchableOpacity>
                    }
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
        margin: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgb(93, 110, 37)',
    },
    question: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(93, 110, 37)',
        fontSize: 18,
    },
    summary: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        color: 'grey'
    }
})

export default SpeakingSampleList