import React from 'react'
import Button from '../src'

import '../assets/button.less'

class Test extends React.Component {
  render() {
    return (
      <div>
        <h3>type</h3>
        <Button>default</Button>
        <Button type='primary'>primary</Button>
        <Button type='danger'>danger</Button>
        <Button type='success'>success</Button>
      </div>
    )
  }
}

export default Test
