import React, { Suspense } from 'react'

const StepperLayout = ({children}) => {
  return (
    <Suspense fallback={null}>
      {children}
    </Suspense>
  )
}

export default StepperLayout
