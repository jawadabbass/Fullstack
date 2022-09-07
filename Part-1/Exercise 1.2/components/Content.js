import React, { Fragment } from 'react'
import Part from './Part'

const Content = (props) => {

  return (
    <Fragment>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </Fragment>
  )
}
export default Content