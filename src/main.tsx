import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Todos } from '@/redux-flow/reducers/todos'

const store = createStore(Todos)
console.log('main: ', store)

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <App
        Todos={Todos} handleAddTodo={handleAddTodo}
      />
    </Provider>
  </StrictMode>,
)

// Mock to commit
function handleAddTodo () {
  console.log('delete this function')
}
