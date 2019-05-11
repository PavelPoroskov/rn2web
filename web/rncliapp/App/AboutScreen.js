import React from 'react'
import { Button, View, Text } from 'react-native'

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  }
  render() {
    const { navigate } = this.props.navigation
    console.log('render AboutScreen')

    return (
      <View>
        <Button title='Go to Quotes' onPress={() => navigate('Quotes')} />
        <View>
          <Text>AboutScreen Nav</Text>
        </View>
      </View>
    )
  }
}
