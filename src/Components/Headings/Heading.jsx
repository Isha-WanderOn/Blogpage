import React from 'react'
import {  CaurselHeading } from './Heading.css';

const Heading = (props) => {
  return (
    <CaurselHeading>{props.heading}</CaurselHeading>
  )
}

export default Heading