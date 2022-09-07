import React, { Fragment } from 'react'

const Part = (props) => {
    return (
        <Fragment>
            <p>
                {props.part} {props.exercises}
            </p>
        </Fragment>
    )
}

export default Part