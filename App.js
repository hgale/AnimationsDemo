/**
 * Demo of Animation Timing in React Native
 */

import React, { Component } from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

/* Can Animate any of the following:
*  Animated.Image
*  Animated.ScrollView
*  Animated.Text
*  Animated.View
*/

export default class App extends Component<{}> {

    animatedMargin = new Animated.Value(0);
    animatedWidth = new Animated.Value(50);
    animatedHeight = new Animated.Value(50);

    animateMargin = () => {
      Animated.timing(
        this.animatedMargin,
        {
          toValue: this.animatedMargin._value + 200,
          duration: 1000,
        },
      ).start();
    }

    animateSize = () => {
      Animated.timing(
        this.animatedWidth,
        {
          toValue: this.animatedWidth._value + 50,
          duration: 500,
        },
      ).start();
      Animated.timing(
        this.animatedHeight,
        {
          toValue: this.animatedHeight._value + 50,
          duration: 500,
        },
      ).start();
    }

    render() {
      return (
        <View style={styles.container}>
          <Button title="Animate Margin" onPress={this.animateMargin} />
          <Button title="Animate Size" onPress={this.animateSize} />

          <Animated.View
            style={[
              styles.block,
              { marginTop: this.animatedMargin },
              { width: this.animatedWidth, height: this.animatedHeight },
            ]}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  block: {
    backgroundColor: '#FF9900',
  },
})
