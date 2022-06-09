import React from 'react'
import { Fragment } from 'react'
import RightBar from '../common/navbar/RightBar'
import LeftBar from '../common/navbar/LeftBar'

function Navigation() {
  return (
    <Fragment>
        <RightBar />
        <LeftBar />
    </Fragment>
  )
}

export default Navigation