import { useParams } from "react-router-dom";

export default function Member(){
    let params = useParams()

    return(
        <div>
            <h3>{params.memberName}</h3>
            <p>This is the detaul page of {params.memberName}</p>
        </div>
    )
}