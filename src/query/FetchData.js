import React, { useEffect } from 'react'
import { useFetchData } from './Query'
import CircularProgress from '@mui/material/CircularProgress';


export const FetchData = () => {

    const {isLoading,isSuccess,isError,data,refetch} = useFetchData()
    useEffect(() => {
      
            console.log('data',data)
            console.log("isloading",isLoading)
            console.log("is success",isSuccess)
            console.log("is error",isError)
       
    }, [isLoading])
    

  return (
    <div>
        {
            isLoading ? <CircularProgress/> : <h1>ok</h1>
        }
        <button onClick={()=>refetch()}>refetch</button>

    </div>
  )
}
