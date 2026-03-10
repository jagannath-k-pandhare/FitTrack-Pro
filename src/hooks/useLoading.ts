import {useState} from "react"

//Export
export function useLoading() {
   const [loading, setLoading] = useState(false)
   return { loading, setLoading }
}