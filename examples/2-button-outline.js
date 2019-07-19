import React from 'react'
import Button from '../src'

import '../assets/button.less'

class Test extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>outline</h3>
        <Button type='primary' outline>
          primary
        </Button>
        <Button type='danger' outline>
          danger
        </Button>
        <Button type='success' outline>
          success
        </Button>
      </div>
    )
  }
}

export default Test
