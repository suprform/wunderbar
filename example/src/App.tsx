import React from 'react'

import { Button, Icons } from 'wunderbar'
import 'wunderbar/dist/index.css'

const App = () => {
  return (
    <Button
      PostIcon={Icons.ArrowRight}
      rounded
      style={{ margin: '40px' }}
      size='big'
    >
      Create React Library Example{` `}
    </Button>
  )
}

export default App
