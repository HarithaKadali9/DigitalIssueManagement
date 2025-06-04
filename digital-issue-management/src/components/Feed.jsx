import { useEffect, useState} from "react";
import axios from "axios";
const Feed=()=>{
    const [data, setData]=useState([]);
    const fetchData= async()=>{
        try{
            const res=await axios.get("http://localhost:4000/feed")
            const result=res.data
            setData(result);
        }catch(err){
            console.error("Error fetching data:", err);
        }
    }
    useEffect(()=>{
        fetchData();
    }, [])
    return(
        <div>
            {data.map((item, index)=>(
                <div key={index}>
                    <h2>{item.complaintName}</h2>
                    <h4>{item.complaintType}</h4>
                    <p>{item.complaintIssue}</p>
                    <br/><br/>
                </div>
            ))}
        </div>
    )
}
export default Feed;