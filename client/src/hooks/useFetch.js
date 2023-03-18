  import { useEffect, useState } from "react";
import { makeRequest } from "../network/makeRequest";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fectchData = async () => {
            try{
                setLoading(true)
                const res = await makeRequest.get(url);
                setData(res.data.data)
            } catch(err) {
                setError(true);
            }
            setLoading(false)
        }
        fectchData()
    }, [url]);


    return { data, loading, error };
}

export default useFetch;