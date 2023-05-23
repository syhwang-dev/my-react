import {Link} from 'react-router-dom';
import getxy from './getxy.json'
import { useEffect, useRef, useState } from 'react';

const FcstMain = () => {    
    // const ops = [];
    
    // getxy는 이미 배열임
    const ops = getxy.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>
    );
    // console.log("getxy", getxy);

    // state 변수
    const [dt, setDt] = useState();
    // const [code, setCode] = useState();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();

    // const ultraShow = (e) => {
    //     e.preventDefault();
    //     // getxy

    //     const BASE_URL = ''
    //     let apikey = 'hyoIULZ88PwumdTwE1QtyLqAJk%2BjALZVCkgdEZDEeRtW2ORIERBpnmJzo2gG%2F0wckQYz8tuDq3drlrOa9hv2rQ%3D%3D';
    //     // let url = 
    // }

    // 배열.map → 갯수
    // 배열.filter → 조건에 맞는 것만

    // const cityInfo = getxy.map((item) => [item['1단계']])
    // console.log("cityInfo", cityInfo);

    const [selCity, setSelCity] = useState("");
    
    const selTest = (e) => {
        setSelCity(e.target.value);
    }

    // 입력 값을 가져오기 위한 ref변수
    const txt1 = useRef();
    const sel1 = useRef();

    // dt가 변경되었을 때
    useEffect(() => {
        // console.log(dt);
    }, [dt])

    // useEffect(()=>{        
    //     console.log("code", code);
    //     let temp = xy.filter((item) => item["행정구역코드"] ===code)[0] ;
    //     console.log(temp);
    //     setArea(temp["1단계"]);
    //     setX(temp["격자 X"]);
    //     setY(temp["격자 Y"]);
    // }, [code]) ;
    
    // 입력 이벤트
    const getDt = () => {
        let tdt = txt1.current.value;  // 클릭이 될 때 마다 dt가 만들어짐.
        tdt = tdt.replaceAll('-', '');
        setDt(tdt);
        // console.log(tdt); 여기서 찍어보면 안 됨. useEffect에서 찍어볼 것!
    }

    const getSel = () => {
        // setCode(parseInt(sel1.current.value));  // 수치데이터이기 때문에 parseInt 해줘야 함.
        // let temp = getxy.filter((item) => item["행정구역코드"] === code)[0];  // 이렇게 되면 오브젝트가 됨.
        let temp = getxy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0];
        // console.log("temp", temp);
        setArea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);
    }

    // 임시 테스트
    // const dt = '20230521';
    // const area = '부산광역시';
    // const x = '52';
    // const y = '38';

    return (
        <article>
            <header><h1>일기예보</h1></header>
            <div className='grid'>
                <div>
                    <input ref={txt1} type="date" id="dt" name="dt" onChange={() => getDt()}/>
                </div>
                {/* <label for="fruit"></label> */}
                <div>
                    <select ref={sel1} id="sel" name="sel" onChange={() => getSel()}>
                        {/* selected 넣으면 에러 발생 */}
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