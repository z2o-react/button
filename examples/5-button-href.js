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
        <h3>href</h3>
        <Button onClick={this.handleClick} href='https://www.lishuaishuai.com'>
          block
        </Button>
        <Button onClick={this.handleClick} href='https://www.lishuaishuai.com' type='primary'>
          primary
        </Button>
        <Button onClick={this.handleClick} href='https://www.lishuaishuai.com' type='danger'>
          danger
        </Button>
        <Button onClick={this.handleClick} href='https://www.lishuaishuai.com' type='success'>
          success
        </Button>
        <h3>target="_blank"</h3>
        <Button onClick={this.handleClick} target='_blank' href='https://www.lishuaishuai.com'>
          block
        </Button>
        <Button
          onClick={this.handleClick}
          target='_blank'
          href='https://www.lishuaishuai.com'
          type='primary'
        >
          primary
        </Button>
        <Button
          onClick={this.handleClick}
          target='_blank'
          href='https://www.lishuaishuai.com'
          type='danger'
        >
          danger
        </Button>
        <Button
          onClick={this.handleClick}
          target='_blank'
          href='https://www.lishuaishuai.com'
          type='success'
        >
          success
        </Button>
      </div>
    )
  }
}

export default Test
