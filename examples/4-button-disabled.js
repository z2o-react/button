import React from 'react'
import Button from '../src'

import '../assets/button.less'

class Test extends React.Component {
  render() {
    return (
      <div>
        <h3>disabled</h3>
        <Button disabled>default disabled</Button>
        <Button type='primary' disabled>
          primary disabled
        </Button>
        <Button type='danger' disabled>
          danger disabled
        </Button>
        <Button type='success' disabled>
          success disabled
        </Button>
        <Button href='https://www.lishuaishuai.com' disabled>
          href disabled
        </Button>
      </div>
    )
  }
}

export default Test
