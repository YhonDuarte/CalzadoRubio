import React from 'react'
import { Mensaje } from './style'

const ShowMessage = ({titulo, alert}) => {
  return (
    <Mensaje alert={alert}>{titulo}</Mensaje>
  )
}

export default ShowMessage