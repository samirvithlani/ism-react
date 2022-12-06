import axios from "axios"
import {useMutation, useQuery} from "react-query"
import {useNavigate} from "react-router-dom"

const fetchData = async ()=>{

    return await axios.get("http://localhost:8080/user")
}


const addData = async (data)=>{

    console.log("data",data)
    return await axios.post("https://reqres.in/api/users?page=2",data)
}
export const useFetchData = () =>{

    return useQuery('fetch',fetchData,{
        retryOnMount:false,
        enabled:false,
        retry:10,
        retryDelay:1000
    })
}

export const useAddData = ()=>{

    const navigate = useNavigate()

    return useMutation(addData,{
        onSuccess:(data)=>{
            console.log("success",data)
            navigate("/home")
        },
        onError:(err)=>{
            console.log("error",err)
            //navigate("/home")
        }
    })
}