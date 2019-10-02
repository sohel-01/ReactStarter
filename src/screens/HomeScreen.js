import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hello !</Text>

        <Button
          onPress={() => navigation.navigate('Components')}
          title="Go to Component Screen" />
        <Separator />
        <Button
          onPress={() => navigation.navigate('List')}
          title="Go to List Screen" />
        <Separator />
        <Button
          onPress={() => navigation.navigate('Image')}
          title="Go to Image Screen" />
        <Separator />
        <Button
          onPress={() => navigation.navigate('Counter')}
          title="Go to Counter Screen" />
        <Separator />
        <Button
          onPress={() => navigation.navigate('Color')}
          title="Go to Color Screen" />
        <Separator />
        <Button
          onPress={() => navigation.navigate('Square')}
          title="Go to Square Screen" />
        <Separator />
        <Button
          onPress={() => navigation.navigate('Text')}
          title="Go to Text Screen" />
        <Separator />
        <Button
          onPress={() => navigation.navigate('Box')}
          title="Go to Box Screen" />

      </View>
    </SafeAreaView>
  );
};

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default HomeScreen;

