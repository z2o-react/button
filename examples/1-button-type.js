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
        <h3>type</h3>
        <Button onClick={this.handleClick}>default</Button>
        <Button onClick={this.handleClick} type='primary'>
          primary
        </Button>
        <Button onClick={this.handleClick} type='danger'>
          danger
        </Button>
        <Button onClick={this.handleClick} type='success'>
          success
        </Button>
      </div>
    )
  }
}

export default Test
