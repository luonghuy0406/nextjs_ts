import Link from 'next/link'
import React from 'react'

let test = ['a','b','c']

export default function Blogs() {
  return (
    <div>Blogs
        <ul>

        {
            test.map((el)=>{
                return <li><Link href={`/blogs/${el}`}>{el}</Link></li>
            })
        }
        </ul>

    </div>
  )
}
