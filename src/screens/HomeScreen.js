import React from 'react';
import { Text, StyleSheet , View , Button , TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello !</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Component Screen"/>
    
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List Screen"/>
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Screen"/>
        <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Screen"/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

