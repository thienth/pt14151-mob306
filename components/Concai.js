import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Concai extends React.Component {
    constructor(props){
        super(props);

        
    }

    render(){
        return (
            <View style={styles.bigView}>
                <Text style={styles.txtName}>Tên bé: {this.props.tdata.name}</Text>
                <Text style={styles.txtAge}>Tuổi bé: {this.props.tdata.age}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigView: {
        backgroundColor: 'grey'
    },
    txtName: {
        color: 'green',
        fontSize: 25
    },
    txtAge: {
        color: 'purple',
        fontSize: 20
    }
});