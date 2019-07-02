import React from 'react'
import { StyleSheet, View, FlatList,Button, Text } from 'react-native'
import ListItem from '../Components/ListItem'
import axios from 'axios'
class TopicList extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
       super(props);
       this.state = {
           topic: []
       }
    }
    componentWillMount(){
        axios.get('https://tuandang92.000webhostapp.com/server/topic.php')
        .then(data => {
            this.setState({
                topic: data.data.topic
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.topic}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem={({item}) =>
                        <ListItem
                            navigate = {navigate}
                            key={item.idTopic}
                            item = {item}
                            />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f5f7"
    }
})

export default TopicList