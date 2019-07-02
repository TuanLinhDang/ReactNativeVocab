import React from 'react'
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native'
import Modal from "react-native-modal";
var {height, width} = Dimensions.get('window')
class ShowModal extends React.Component {
    render() {
        return (
            <View style={{ widthzjustifyContent: 'center', alignItems: 'center'}}
            onPress={this.props.onCloseModal}>
                <Modal 
                    animationIn = 'slideInUp'
                    animationInTiming = {600}
                    animationOut = 'slideOutDown'
                    animationOutTiming = {600}
                    onSwipeComplete={this.props.onCloseModal}
                    swipeDirection="down"
                    swipeThreshold = {150}
                    isVisible={this.props.isVisible}
                    onBackdropPress={this.props.onCloseModal}
                >
                    <View style = {styles.modalContainer}>
                        <View style = {styles.topView}>
                            <Text style={styles.word}>{this.props.word.word}</Text>
                        </View>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.titleExp}>Explaination:</Text>
                            <Text style={styles.explaination}>{this.props.word.explaination}</Text>
                        </View>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.titleExp}>Example:</Text>
                            <Text style={styles.explaination}>{this.props.word.example}</Text>
                        </View>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.titleExp}>Meaning:</Text>
                            <Text style={styles.explaination}> {this.props.word.meaning}</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        alignSelf: 'center',
        width: width - 50,
        backgroundColor: 'rgb(192, 200, 201)'
    },
    topView: {
        height: 60,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(93, 110, 37)',
        marginBottom: 5
    },
    word: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    titleExp: {
        alignSelf: 'stretch',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        backgroundColor: 'rgb(93, 110, 37)'
    },
    explaination: {
        backgroundColor: 'white',
        padding: 5,
        color: 'black',
        fontSize: 16,
    }

})
export default ShowModal