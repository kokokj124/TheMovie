import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Route } from '@react-navigation/native'
export type Props = {
    navigation?: any,
    route: Route<string, {
        paramPage: number,
        otherParam: string
    }>,
}

const Home: React.FC<Props> = ({route, navigation, ...props}) => {
    let [count, setCount] = useState(1);
    console.log(count);
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={() => {
                    navigation.push('Page',
                        {
                            paramPage: 2,
                            otherParam: 'anything you want here',
                        })
                    }}
                title="Navigator Again Home" />

            <Button
                onPress={() => {
                    navigation.navigate('Page',
                        {
                            paramPage: 2,
                            otherParam: 'anything you want here',
                        })
                }}
                title="Pass Param For Page" />

            <Button
                onPress={() => {
                    navigation.setParams({
                        otherParam: 'Set Param Success',
                      });
                }}
                title="Set Param"
            />

            <Button title="Go back" onPress={() => navigation.goBack()} />

            <Button title="Set count" onPress={() => setCount(count + 1)} />

            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()} />
            <Text>{route?.params?.otherParam} {count}</Text>
        </View>
    );
}

export default Home