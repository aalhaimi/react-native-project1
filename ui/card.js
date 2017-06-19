import React from 'react';
import { Image } from 'react-native';
import {
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
} from 'native-base';

const CardImage = () => (
  <Card >
    <CardItem>
      <Left>
        <Thumbnail
          source={{
            uri: 'https://placeimg.com/200/200/any',
          }}
        />
        <Body>
          <Text>NativeBase</Text>
          <Text note>GeekyAnts</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: 200,
        }}
        source={require('../rsc/image.jpeg')}
      />
    </CardItem>
    <CardItem>
      <Button transparent>
        <Icon active name="thumbs-up" />
        <Text>12 Likes</Text>
      </Button>
      <Button transparent>
        <Icon active name="chatbubbles" />
        <Text>4 Comments</Text>
      </Button>
      <Text>5h ago</Text>
    </CardItem>
  </Card>
  );

export { CardImage as default };
