import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const fruit = useParams().item;
    const fruit2 = useParams().item2;

    return(
    <article>
        <header><h1>RoutePage1</h1></header>
        <h1>{fruit}</h1>
        <h1>{fruit2}</h1>
    </article>
    )
}

export default RoutePage1;