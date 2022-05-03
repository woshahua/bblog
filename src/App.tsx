import * as React from 'react';
import ReactDOM from 'react-dom';
import {Column} from './Column'
import {Card} from './Card'
import {AppContainer} from './styled'

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
	<Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
	<Card text="Generate app scaffold" />
      </Column>
      <Column text="Done">
	<Card text="Generate app scaffold" />
      </Column>
    </AppContainer>
  )
}

export default App;
