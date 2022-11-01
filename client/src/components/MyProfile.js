

import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const MyProfile = ({user}) => {
    console.log(user);
    return (
  <Grid>
    <Grid.Row>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
    </Grid.Column>
    
    <Grid.Column width={10}>
      <h6>User Name :{user.username}</h6>
      <h6>Email :{user.email}</h6>
    </Grid.Column>
    </Grid.Row>
  </Grid>
)
}

export default MyProfile