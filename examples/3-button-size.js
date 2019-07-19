import React from 'react'
import Button from '../src'

import '../assets/button.less'

class Test extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>size</h3>
        <Button size='large'>large</Button>
        <Button>medium</Button>
        <Button size='small'>small</Button>
      </div>
    )
  }
}

export default Test
