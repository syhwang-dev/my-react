import {Link} from 'react-router-dom';
import getxy from './getxy.json'
import { useEffect, useRef, useState } from 'react';

const FcstMain = () => {    

    const ops = getxy.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>
    );

    const [dt, setDt] = useState();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();

    const [selCity, setSelCity] = useState("");
    
    const selTest = (e) => {
        setSelCity(e.target.value);
    }

    const txt1 = useRef();
    const sel1 = useRef();

    useEffect(() => {
    }, [dt])
    
    const getDt = () => {
        let tdt = txt1.current.value; 
        tdt = tdt.replaceAll('-', '');
        setDt(tdt);
    }

    const getSel = () => {
        let temp = getxy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0];
        setArea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);
    }

    return (
        <article>
            <header><h1>일기예보</h1></header>
            <div className='grid'>
                <div>
                    <input ref={txt1} type="date" id="dt" name="dt" onChange={() => getDt()}/>
                </div>
                <div>
                    <select ref={sel1} id="sel" name="sel" onChange={() => getSel()}>
                        <option value="" >선택</option>
                        {ops}
                    </select>
                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to={`/ultra/${dt}/${area}/${x}/${y}`} role='button'>초단기예보</Link>
                    <Link to={`/vilage/${dt}/${area}/${x}/${y}`} role='button'>단기예보</Link>
                </div>
            </footer>
        </article>
    )
}

export default FcstMain;