import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import getxy from './getxy.json'

const FcstTable = () => {
    const date = useParams().dt;
    const area = useParams().area;
    const sel1 = useRef();

    const ops = getxy.map((item) =>
    <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>
    );

    const getSel = () => {
        let temp = getxy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0];
        console.log(temp);
        // setArea(temp["1단계"]);
        // setX(temp["격자 X"]);
        // setY(temp["격자 Y"]);
    }

    return (
        <article>
            <div className="grid">
                <div>
                    <span>{area}의 초단기예보({date})</span>
                </div>
                <div>
                    <select ref={sel1} id="sel" name="sel" onChange={() => getSel()}>
                        <option value="" >선택</option>
                        {ops}
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">항목명</th>
                        <th scope="col">예측일자</th>
                        <th scope="col">예측일자</th>
                        <th scope="col">예보값</th>
                    </tr>
                </thead>
            </table>
        </article>
    )
}

export default FcstTable;

// useState와 useEffect의 관계
// [dt, setDt] = useState();
// setDt로만 값 변경 가능함.
// useEffect("콜백함수")