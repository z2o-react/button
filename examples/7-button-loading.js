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
        <h3>loading</h3>
        <Button onClick={this.handleClick} loading>
          default
        </Button>
        <Button onClick={this.handleClick} loading type='primary'>
          primary
        </Button>
        <Button onClick={this.handleClick} loading type='danger'>
          danger
        </Button>
        <Button onClick={this.handleClick} loading type='success'>
          success
        </Button>
        <h3>outline</h3>
        <Button onClick={this.handleClick} outline loading>
          default
        </Button>
        <Button onClick={this.handleClick} outline loading type='primary'>
          primary
        </Button>
        <Button onClick={this.handleClick} outline loading type='danger'>
          danger
        </Button>
        <Button onClick={this.handleClick} outline loading type='success'>
          success
        </Button>
      </div>
    )
  }
}

export default Test
