import React from 'react';
import {
    Header,
    Left,
    Body,
    Title,
    Right,
    Button,
    Icon,
} from 'native-base';

const AppHeader = () => (
  <Header>
    <Left>
      <Button transparent>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Title>$ Manager</Title>
    </Body>
    <Right>
      <Button transparent>
        <Icon name="search" />
      </Button>
    </Right>
  </Header>
    );

export { AppHeader as default };
