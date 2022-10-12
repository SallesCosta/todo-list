import { Box } from '@chakra-ui/react'
import Form from './components/form'
import TodosList from './components/todos-list'
import Filter from './components/filter'

const App = () => {
  return (
    <Box w='400px'>
      <Form />
      <TodosList />
      <Filter />
    </Box>
  )
}

export default App
