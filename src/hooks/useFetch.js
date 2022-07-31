import { useEffect, useState } from "react"

const useFetch = () => {
    const [data, setData] = useState([])
    useEffect(() => {
       fetch('fackdata.json').then(res => res.json()).then(data => setData(data))
    }, [])
    return [data]
}
export default useFetch