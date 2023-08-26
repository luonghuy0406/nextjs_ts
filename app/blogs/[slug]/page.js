import React, { Suspense, ErrorBoundary } from 'react'
import Loading from './loading'
import Error from '../../error'

export default function Blog({ params }) {
  return (
    <div>
       <Suspense fallback={<Loading/>}>
            <Test params={params}/>
        </Suspense>
    </div>
  )
}

function Test(props ){
    return <div>Blog: My Post: {props.params.slug}</div>
}
