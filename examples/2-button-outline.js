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
        <h3>outline</h3>
        <Button onClick={this.handleClick} type='primary' outline>
          primary
        </Button>
        <Button onClick={this.handleClick} type='danger' outline>
          danger
        </Button>
        <Button onClick={this.handleClick} type='success' outline>
          success
        </Button>
      </div>
    )
  }
}

export default Test
