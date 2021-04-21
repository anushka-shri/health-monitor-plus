import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Friends</Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
    />
  </div>
  </div>
)

export default FixedMenuLayout;