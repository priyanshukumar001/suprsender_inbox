
import { useRouteError } from "react-router-dom"; //using useRouteError to get errors details and display


const Error = () => {
    const err = useRouteError();

    return (
        <h2 style={{ textAlign: "center" }}><i>{err.status + ' : ' + err.statusText + "....."}</i></h2>
    );
}

export default Error;