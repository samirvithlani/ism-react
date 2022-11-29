import axios from "axios"
import {useQuery} from "react-query"

const fetchData = async ()=>{

    return await axios.get("http://localhost:8080/user")
}

export const useFetchData = () =>{

    return useQuery('fetch',fetchData,{
        retryOnMount:false,
        enabled:false,
        retry:10,
        retryDelay:1000
    })
}