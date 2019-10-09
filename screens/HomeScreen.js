import React from 'react';
import { SafeAreaView, Text, View, FlatList, StyleSheet } from 'react-native';
import { Component } from 'react';
import SubjectItem from '../components/SubjectItem';


class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Thèmes',
    headerStyle: {backgroundColor: '#41D995'},
    headerTitleStyle: {color: 'white',fontSize:50, textAlign: 'center'},
    fontWeight: 'bold',


  };
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      title: '',
    };
  }
  componentDidMount() {
    this.fetchSubjects();
  }

  fetchSubjects() {
    console.log(process.env.API_URL);
    fetch(process.env.API_URL + '/subjects')
        .then(response => response.json())
        .then(subjects => this.setState({ subjects: subjects }))
  }
  render() {
    return (
        <SafeAreaView>
          <FlatList
              data={this.state.subjects}
              renderItem={({ item }) => <SubjectItem title={item.title} count={item.questions.length} />}
              keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
    );
  }
}
export default HomeScreen;