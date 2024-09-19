import { useRouteError } from "react-router-dom";

function ErrorRout(){

    const err = useRouteError()
    console.log("error",err)
    return(
        <>
        <h1>Oops!!</h1>
        <h2>{err.status}</h2>
        <h2>{err.statusText}</h2>
        <h2>{err.data}</h2>
        </>
    )
}

export default ErrorRout;