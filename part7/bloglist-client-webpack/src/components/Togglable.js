import React, { useState, useImperativeHandle, forwardRef } from 'react'
import styled from 'styled-components'
import Button from './Button'

const HideWhenVisible = styled.div`
  display: ${props => props.visible ? 'none' : ''};
`

const ShowWhenVisible = styled.div`
  display: ${props => props.visible ? '' : 'none'};
`

const Togglable = ({ children, buttonLabel, }, ref) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => ({ toggleVisibility }))

  return (
    <div>
      <HideWhenVisible visible={visible}>
        <Button onClick={toggleVisibility}>{buttonLabel}</Button>
      </HideWhenVisible>
      <ShowWhenVisible visible={visible}>
        {children}
        <Button onClick={toggleVisibility}>cancel</Button>
      </ShowWhenVisible>
    </div>
  )
}

export default forwardRef(Togglable)
