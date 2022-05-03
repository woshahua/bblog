import * as React from 'react';
import ReactDOM from 'react-dom';
import {Column} from './Column'
import {Card} from './Card'
import {AddItemButton, AppContainer} from './styled'
import { AddNewItem } from './AddNewItem';

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
      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
    </AppContainer>
  )
}

export default App;
