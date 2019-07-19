import React from 'react'
import Button from '../src'

import '../assets/button.less'

class Test extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>block</h3>
        <Button block>block</Button>
        <Button type='primary' block>
          primary
        </Button>
        <Button type='danger' block>
          danger
        </Button>
        <Button type='success' block>
          success
        </Button>
      </div>
    )
  }
}

export default Test
