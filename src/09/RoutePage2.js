import { useLocation } from "react-router-dom";
import qs from 'query-string';

const RoutePage2 = () => {
    const loc = useLocation().search;
    console.log('loc', loc)  // loc의 값: ?item=%F0%9F%8D%8E&item2=%F0%9F%8D%92

    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    console.log('item', item)

    // 수작업 (쿼리스트링을 사용하는 이유 설명)
    let loc2 = loc.replace('?', '');
    loc2 = loc2.split('&')
    loc2.map((i) => i.split('='))
    console.log('loc2', loc2)

    // const item3 = qs.parse(loc2).item;

    return(
    <article>
        <header><h1>RoutePage2</h1></header>
        <h1>{item}</h1>
        <h1>{item2}</h1>
        {/* <h1>{item3}</h1> */}
    </article>
    )
}

export default RoutePage2;