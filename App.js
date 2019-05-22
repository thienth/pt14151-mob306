import React from 'react';
import { StyleSheet, Text, 
        View, Image, 
        ListView, ScrollView,
        TextInput, TouchableOpacity } from 'react-native';
import Concai from './components/Concai';
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "tran huu thien",
      age: 29,
      isMarried: true,
      ipId: null,
      ipName: null, 
      ipImage: null,
      childs: [
        {
          id:1,
          name: "Trần Thúy Nga",
          image: 'http://ap.poly.edu.vn/user/ph/PH06547.jpg',
          age: 2,
          gender: false
        },
        {
          id: 2,
          name: "Trần Anh Tú",
          image: 'http://ap.poly.edu.vn/user/ph/PH06527.jpg',
          age: 5,
          gender: true
        },
        {
          id: 3,
          name: "Trần Hoàng Hải",
          image: 'http://ap.poly.edu.vn/user/ph/PH06494.jpg',          
          age: 1,
          gender: true
        }
      ]
    }
  }

  increaseAge = () => {
    this.setState({
      age: this.state.age+1
    });
  }

  addNewChild = () => {
    var currentChilds = [...this.state.childs];
    currentChilds.push({
      id: this.state.ipId,
      name: this.state.ipName,
      image: this.state.ipImage
    });
    this.setState({
      childs: currentChilds,
      ipId: null,
      ipName: null,
      ipImage: null
    });

  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Mã sinh viên</Text>
        <TextInput
          onChangeText={(txt) => {this.setState({ipId: txt})}}
          style={styles.txtInput}
          value={this.state.ipId}
        />
        <Text>Tên sinh viên</Text>
        <TextInput
          onChangeText={(txt) => {this.setState({ipName: txt})}}
          style={styles.txtInput}
          value={this.state.ipName}
        />
        <Text>Ảnh</Text>
        <TextInput
          onChangeText={(txt) => {this.setState({ipImage: txt})}}
          style={styles.txtInput}
          value={this.state.ipImage}
        />
        <TouchableOpacity
          onPress={this.addNewChild}
        >
          <Text>Thêm mới sinh viên</Text>
        </TouchableOpacity>
        <Text>{this.state.ipId}</Text>
        <Text>{this.state.ipName}</Text>
        <Text>{this.state.ipImage}</Text>
        {this.state.childs.map(
          (ch) => 
          <View key={ch.id} style={[styles.specialUnit]}>
            <View style={styles.leftImg}>
              <Image style={styles.unitImg} source={{uri: ch.image}}/>
            </View>
            <View style={styles.rightTitle}>
              <Text style={styles.txtTitle}>{ch.name}</Text>
              <Text style={styles.contentText}>Solskjaer muốn xây dựng đội bóng bền vững để đưa MU trở lại với đỉnh cao.</Text>
            </View>
          </View>
        )}
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  txtInput: {
    borderColor: 'green', 
    borderWidth: 1, 
    height: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 35
  },
  unit:{
    width: '100%',
    height: 300,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  img: {
    flex: 3,
    backgroundColor: "skyblue",
    height: 100
  },
  unitImg:{
    width: '100%',
    height: '100%'
  },
  title:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  txtTitle:{
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 5
  },  
  contentText:{
    paddingLeft: 5,
    paddingTop: 5
  },
  specialUnit: {
    width: '100%',
    height: 150,
    flexDirection: 'row'
  },
  leftImg:{
    flex: 1,
    height: "100%",
    backgroundColor: "skyblue",
  },
  rightTitle: {
    flex: 1,
    height: "100%",
  }

});
