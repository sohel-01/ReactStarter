import  React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const ImageDetails = ({imageSource, title, rating}) => {
    return( 
    <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
        <Text>Image Rating-{rating}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetails;