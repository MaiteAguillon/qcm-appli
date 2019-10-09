import React, {Component} from 'react';
import { View, Text, Button } from "react-native";


class QuestionsItem extends Component {
    render() {

        let button = null;
        if (typeof this.props.onClick === 'function') {
            button = <Button onPress={() => this.props.onClick()} title='Afficher'/>;
        }

        return (
            <View>
                <Text>{this.state.question.title}</Text>
                {button}
            </View>
        );
    }
}

export default QuestionsItem;