//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {setName, getRepos} from "../redux/repos/action"

// create a component
class Repos extends Component {

    onPress = () => {
        this.props.dispatch(getRepos())
      }
    
    onChangeText =(texto)=>{
        this.props.dispatch(setName(texto))
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.onChangeText}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Touch Here </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});

//make this component available to the app
export default connect()(Repos);
