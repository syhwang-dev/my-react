import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import getxy from './getxy.json'


const FcstTable = ( {datas, itemName, gubun} ) => {
    console.log("datas, itemName, gubun", datas, itemName, gubun);
    console.log("itemName!!!!", itemName);
    


    // const [ultraData, setUltraData]  = useState();

    // const ultraData = () => {
    //     info.filter((item) => {
    //         return item.category
    //     })
    // }

    // for (let itm of datas) {
    //     // console.log(itm);  // 에러 발생
    //     let val = parseInt(itm.baseDate);
    // }

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
                        <td>null</td>
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