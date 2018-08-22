import React, { Component } from 'react';
import { StyleSheet, LayoutAnimation, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLibrary } from '../actions';
import { CardSection } from './common';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  handleOnPress = () => {
    const { item } = this.props;
    this.props.selectLibrary(item.id);
  };

  renderDescription = () => {
    const { expanded, item } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1, padding: 5 }}>{item.description}</Text>
        </CardSection>
      );
    }
  };

  render() {
    const { title } = this.props.item;
    const { headerTextStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={this.handleOnPress}>
        <View>
          <CardSection>
            <Text style={headerTextStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  headerTextStyle: {
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 30
  }
});

const mapStateToProps = ({ selectedLibrary }, ownProps) => {
  const expanded = selectedLibrary === ownProps.item.id;
  return { expanded };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectLibrary }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
