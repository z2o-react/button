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
        <h3>size</h3>
        <Button onClick={this.handleClick} size='large'>
          large
        </Button>
        <Button onClick={this.handleClick}>medium</Button>
        <Button onClick={this.handleClick} size='small'>
          small
        </Button>
      </div>
    )
  }
}

export default Test
