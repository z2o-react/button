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
        <h3>disabled</h3>
        <Button onClick={this.handleClick} disabled>
          default disabled
        </Button>
        <Button onClick={this.handleClick} type='primary' disabled>
          primary disabled
        </Button>
        <Button onClick={this.handleClick} type='danger' disabled>
          danger disabled
        </Button>
        <Button onClick={this.handleClick} type='success' disabled>
          success disabled
        </Button>
        <Button onClick={this.handleClick} href='https://www.lishuaishuai.com' disabled>
          href disabled
        </Button>
      </div>
    )
  }
}

export default Test
