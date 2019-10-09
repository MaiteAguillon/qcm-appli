import React from 'react';
import {ScrollView,Text,View,FlatList, StyleSheet, Platform} from 'react-native';
import {Component} from 'react';
import QuestionItem from '../components/QuestionsItem';

 class QuestionsScreen extends Component {

    static navigationOptions = {
        title: 'Question',
    };

    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            title: 'question',
        };
    }

    componentDidMount() {
        this.fetchQuestions();
    }

     fetchQuestions() {
        console.log('http://178.128.172.170:8000/subjects');
        fetch('http://178.128.172.170:8000/subjects')
            .then(response => response.json())
            .then(questions => this.setState({ questions:questions }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <FlatList data={this.state.questions}
                                  renderItem={({item}) => <QuestionItem title={item.title}/>}
                                  keyExtractor={(item, index) => index.toString()}/>
                    </View>
                </ScrollView>
            </View>
        )}
}

export default QuestionsScreen;