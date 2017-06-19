import React from 'react';
import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    Badge,
} from 'native-base';

const FooterTabs = () => (
  <Footer>
    <FooterTab>
      <Button>
        <Icon style={{ color: '#007AFF' }} name="apps" />
      </Button>
      <Button>
        <Icon name="home" />
      </Button>
      <Button>
        <Icon name="navigate" />
      </Button>
      <Button badge vertical>
        <Badge >
          <Text>51</Text>
        </Badge>
        <Icon name="person" />
      </Button>
      <Button>
        <Icon name="menu" />
      </Button>
    </FooterTab>
  </Footer>
    );

export { FooterTabs as default };
