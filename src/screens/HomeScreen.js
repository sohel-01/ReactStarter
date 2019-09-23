import React from 'react';
import { Text, StyleSheet , View , Button , TouchableOpacity } from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hello !</Text>
      <Button 
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Component Screen"/>
    
    <Button 
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Screen"/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

