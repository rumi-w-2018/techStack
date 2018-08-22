import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem = ({ item }) => {
    return <ListItem item={item} />;
  };

  // eslint-disable-next-line no-unused-vars
  specifyKey = item => item.id.toString(); // key needs to be String

  render() {
    const { libraries } = this.props;
    if (libraries.length === 0) return;
    return <FlatList data={libraries} renderItem={this.renderItem} keyExtractor={this.specifyKey} />;
  }
}

const mapStateToProps = ({ libraries }) => {
  return { libraries };
};

export default connect(mapStateToProps)(LibraryList);
