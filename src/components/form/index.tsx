import { addTodo } from '@/redux-flow/reducers/todos/action-creators'
import { Button, Input } from '@chakra-ui/react'
import { Dispatch, FormEvent, useState } from 'react'
import { connect } from 'react-redux'

type FormProps = {
  handleAddTodo: (value: string) => void
}

const Form = ({ handleAddTodo }: FormProps) => {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    handleAddTodo(value)
    setValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='todo'
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        />
        <Button type='submit' disabled={value.length === 0}>
          Adicionar
        </Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleAddTodo: (data: string) => {
    dispatch(addTodo(data))
  },
})

export default connect(null, mapDispatchToProps)(Form)
