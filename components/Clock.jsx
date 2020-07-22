import React, {useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

setInterval(() => {
    time = time - 1;
    console.log()
    // if (time <= 0) {
    //     clearInterval(interval);
    //     counting = false;
    //     time = parseInt(timer) * 60;
    // }

}, 1000);

export default class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
            counter: 0
        }
    }

    tick() {
        this.setState({
            counter: this.state.counter + 2
        });
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState(({timer}))
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Time for the exercise:</Text>
                <TextInput value="2"/>

                <Text style={styles.clock}>2</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clock: {
        fontSize: 50
    }
});

