import React from 'react'
import Button from '../src'

import '../assets/button.less'

class Test extends React.Component {
  render() {
    return (
      <div>
        <h3>loading</h3>
        <Button loading>default</Button>
        <Button loading type='primary'>
          primary
        </Button>
        <Button loading type='danger'>
          danger
        </Button>
        <Button loading type='success'>
          success
        </Button>
        <h3>outline</h3>
        <Button outline loading>
          default
        </Button>
        <Button outline loading type='primary'>
          primary
        </Button>
        <Button outline loading type='danger'>
          danger
        </Button>
        <Button outline loading type='success'>
          success
        </Button>
      </div>
    )
  }
}

export default Test
