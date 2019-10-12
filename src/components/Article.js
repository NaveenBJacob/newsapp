import React from 'react';

import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';


export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      url
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const {navigate}=this.props.navigation;
    
    return (

        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}

        >
          <Text style={{ marginBottom: 10 }}>
            {description || 'Read More..'}
          </Text>
          <Button 
          title='More'
          style={{color:'red',width:200}} 
          onPress={()=>{navigate('Details',{news:article});
            }}>
          </Button>  
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >

          </View>
        </Card>

    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#ffffff',
    fontSize: 10
    
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};