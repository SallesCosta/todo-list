import { toggleTodo } from '@/redux-flow/reducers/todos/action-creators'
import { Text, Button, HStack, List, ListItem, Spacer } from '@chakra-ui/react'
import { Dispatch } from 'react'
import { connect } from 'react-redux'
import * as F from '@/reducers/visibility-filter'

type TodosProps = {
  text: string
  id: number
  completed: boolean
}

type TodosListProps = {
  handleToggleTodo: any
  Todos: any
  ActiveFilter: string
}

export const TodosList = ({
  handleToggleTodo,
  Todos,
  ActiveFilter,
}: TodosListProps) => {
  return (
    <div>
      <List>
        {getVisibleTodos(Todos, ActiveFilter).map((todo: TodosProps) => (
          <ListItem key={todo.id}>
            <HStack>
              <Text textDecoration={todo.completed ? 'line-through' : 'none'}>
                {todo.text}
              </Text>
              <Spacer />
              <Button onClick={() => handleToggleTodo(todo.id)}>toggle</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

const getVisibleTodos = (Todos: any, ActiveFilter: string) => {
  return {
    [F.SHOW_ALL]: Todos,
    [F.SHOW_COMPLETED]: Todos.filter(
      (todo: { completed: string }) => todo.completed,
    ),
    [F.SHOW_ACTIVE]: Todos.filter(
      (todo: { completed: string }) => !todo.completed,
    ),
  }[ActiveFilter]

  /* switch (ActiveFilter) { */
  /*   case F.SHOW_ALL: */
  /*     return Todos */
  /*   case F.SHOW_COMPLETED: */
  /*     return Todos.filter((todo: { completed: string }) => todo.completed) */
  /*   case F.SHOW_ACTIVE: */
  /*     return Todos.filter((todo: { completed: string }) => !todo.completed) */
  /* } */
}

const mapStateToProps = (state: any) => ({
  Todos: state.todos,
  ActiveFilter: state.visibilityFilter,
})
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleToggleTodo: (id: number) => {
    dispatch(toggleTodo(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
