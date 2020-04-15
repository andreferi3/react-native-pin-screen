import * as React from 'react';
import { View, Text } from 'react-native';

interface IProps {
    text: string
}

export default class PinScreen extends React.Component<IProps> {
    public render() {
        return (
            <View>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}