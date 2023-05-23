import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import getxy from './getxy.json'


const FcstTable = ( {info} ) => {

    // const [ultraData, setUltraData]  = useState();

    const ultraData = () => {
        info.filter((item) => {
            return item.category
        })
    }


    return (
        <article>
            <table>
                <thead>
                    <tr>
                        <th scope="col">항목명</th>
                        <th scope="col">예측일자</th>
                        <th scope="col">예측시간</th>
                        <th scope="col">예보값</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* 항목명 */}
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </article>
    )
}

export default FcstTable;

// useState와 useEffect의 관계
// [dt, setDt] = useState();
// setDt로만 값 변경 가능함.
// useEffect("콜백함수")