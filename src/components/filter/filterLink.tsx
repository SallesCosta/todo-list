import { Link, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

type FilterLinkProps = {
  children: ReactNode | ReactNode[]
  action: string
  activeFilter: string
  handleClick?: () => void
}

type TagProps = {
  /* tag: string  */
  tag: 'a' | 'span'
  style?: { color: string }
  href?: string
  handleClick?: () => void
}

export const FilterLink = ({
  children,
  activeFilter,
  handleClick,
  action,
}: FilterLinkProps): JSX.Element => {
  const span: TagProps = { tag: 'span', style: { color: 'red' } }
  const a: TagProps = { tag: 'a', href: '#', handleClick }

  const Component = action === activeFilter ? span : a

  return (
    <Component.tag
      href={Component.href}
      onClick={Component.handleClick}
      style={Component.style}
    >
      {children}
    </Component.tag>
  )
}
