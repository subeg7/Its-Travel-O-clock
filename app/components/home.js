import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* We have { this.props.screenProps.currentFriends.length } friends! */}
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
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
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Home);