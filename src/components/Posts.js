import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'

const Posts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=> {
            if(res.data){
                setData(res.data.slice(0,20))
            }
        })
    }, [])
  return (
    <>
    <h1>Posts</h1>
        {
            data.map((d, index) => {
                return (
                    <Post post={d} key={index} />
                )
            })
        }
    </>
  )
}

export default Posts