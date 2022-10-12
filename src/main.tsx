import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux-flow/reducers'

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log('main: ', store.getState())
})

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>,
)
