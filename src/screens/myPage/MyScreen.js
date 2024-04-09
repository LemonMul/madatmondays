// MyScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const MyScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Go to My1"
                onPress={() => navigation.navigate('My1')}
            />
            <Button
                title="Go to My2"
                onPress={() => navigation.navigate('My2')}
            />
        </View>
    );
};

export default MyScreen;
