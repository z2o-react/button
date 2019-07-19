import React from 'react'
import Button from '../src'

import '../assets/button.less'

class Test extends React.Component {
  handleClick = e => {
    console.log('click', e)
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>block</h3>
        <Button onClick={this.handleClick} block>
          block
        </Button>
        <Button onClick={this.handleClick} type='primary' block>
          primary
        </Button>
        <Button onClick={this.handleClick} type='danger' block>
          danger
        </Button>
        <Button onClick={this.handleClick} type='success' block>
          success
        </Button>
      </div>
    )
  }
}

export default Test
