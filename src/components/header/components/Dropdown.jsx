import React from 'react'
import { DropdownEl } from './dropdown.styles'

export default function Dropdown({children, className, badge}) {
  return (
    <DropdownEl className={className} badge={badge}>
        {children}
    </DropdownEl>
  )
}
