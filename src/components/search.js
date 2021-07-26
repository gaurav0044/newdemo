import React from 'react';
import {View, Text} from 'react-native';
import styles from "../assets/styles/index";
export class Card extends React.PureComponent {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View style={styles.cardContainer} key={this.props.index}>
        <TitleValue title={'Id'} value={this.props.id} />
        <TitleValue title={'Name'} value={this.props.name} />
        <TitleValue title={'Email'} value={this.props.email} />
        <TitleValue title={'Body'} value={this.props.body} />
      </View>
    );
  }
}

export class TitleValue extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={styles.textContainer}>
        <Text
          style={styles.title}>
          {this.props.title}
        </Text>
        <Text
          style={styles.value}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}
export function NoDataFound(){
    return (
        <View
            style={styles.noDataContainer}
        >
            <Text style={styles.noDataTxt}>Not Data Found</Text>
        </View>
    )
}