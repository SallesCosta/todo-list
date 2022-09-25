import {
  Text,
  Box,
  Input,
  Link,
  List,
  ListItem,
  Stack,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { addTodo } from '@/reducers/todos/action-creators'

type AppProps = {
  handleAddTodo: (e: any) => void
  Todos: any
}

export function App ({ handleAddTodo, Todos }: AppProps) {
  return (
    <Box w='300px'>
      <form onSubmit={handleAddTodo}>
        <Input type='text' name='todo' />
        <button type='submit'>AtTdicionar</button>
      </form>
      <List>
        <ListItem textDecoration='line-through'>iItem 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
      <Stack direction='row' gap={8}>
        <Text>Todos</Text> |<Link href=''>Finalizados</Link> |{' '}
        <Link href=''>A fazer</Link>
      </Stack>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  todos: state,
})

const mapDispatchToProps = (dispatch: any) => ({
  handleAddTodo: (e: any) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
