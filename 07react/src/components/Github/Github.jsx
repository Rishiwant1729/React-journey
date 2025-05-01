import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rishiwant1729')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching data:', error);
    //     });
    // }
    // , [])


    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-orange-700 text-white p-4 text-3xl'>Github Following: {data.following}
    <img src={data.avatar_url} alt="git_pic" width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Rishiwant1729')
    return response.json()
}