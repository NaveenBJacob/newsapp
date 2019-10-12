import React from 'react';
import { StyleSheet,View,Text} from 'react-native';

export default function NewsDetails(props) {
    const {title,content}=props.navigation.getParam('news','Null')
    return(
      <View style={styles.container}>
        <Text>
          {title}
        </Text>
        <Text>
          {content}
        </Text>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  