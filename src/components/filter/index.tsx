import * as A from '@/reducers/visibility-filter/'
import { setVisibiltyFilter } from '@/redux-flow/reducers/visibility-filter/action-creators'
import { Stack } from '@chakra-ui/react'
import { Dispatch, FormEvent } from 'react'
import { connect } from 'react-redux'
import { FilterLink } from './filterLink'
/* import { AcitonProps } from '@/redux-flow/reducers/visibility-filter/index */

type FilterProps = {
  activeFilter: any
  handleFilter: any
}

/* export type ActionProps = { */
/*   type?: string */
/*   payload: { */
/*     filter: string */
/*   } */
/* } */

export const Filter = ({ activeFilter, handleFilter }: FilterProps) => {
  return (
    <Stack direction='row' gap={8}>
      {filterItems.map((item: any) => (
        <FilterLink
          key={item.action}
          action={item.action}
          activeFilter={activeFilter}
          handleClick={handleFilter(item.action)}
        >
          {item.label}
        </FilterLink>
      ))}
    </Stack>
  )
}

const filterItems = [
  { label: 'Todos', action: A.SHOW_ALL },
  { label: 'Finalizados', action: A.SHOW_COMPLETED },
  { label: 'A fazer', action: A.SHOW_ACTIVE },
]

const mapStateToProps = (state: any) => ({
  activeFilter: state.visibilityFilter,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleFilter: (filter: string) => (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(filter)
    dispatch(setVisibiltyFilter(filter))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
