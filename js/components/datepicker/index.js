import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Text, Input,Right,Body,Left,Picker, ListItem,Item, Label,Form } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

import DatePicker from 'react-native-datepicker';

class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:"2016-05-15",
      selectedItem: undefined,
      selected1: 'key1',
      results: {
        items: [],
      },
    };
  }

  render(){
    return (
 <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={this.props.openDrawer}>
          <Icon name="menu" />
          </Button>
          </Left>
          <Body>
          <Title>Date Picker</Title>
          </Body>
          <Right />
        </Header>

<Content>
<Form>
  <Item>
    <Label style={{flex: 1}}>วันที่</Label>
    <DatePicker
          style={{flex: 3}}
          date={this.state.date}
          mode="date"
          placeholder="placeholder"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderWidth: 0
            }
          }}
          onDateChange={(date) => {this.setState({date: date});}}
        />
  </Item>

  <Item stackedLabel>
        <Label>Date Picker 11</Label>
             
           
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        /*customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}*/
        onDateChange={(date) => {this.setState({date: date})}}
      />

 </Item>
 </Form>
 </Content>
      </Container>

    )
  }
}


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(MyDatePicker);