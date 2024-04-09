// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Go to Home1"
                onPress={() => navigation.navigate('Home1')}
            />
            <Button
                title="Go to Home2"
                onPress={() => navigation.navigate('Home2')}
            />
        </View>
    );
};

export default HomeScreen;
