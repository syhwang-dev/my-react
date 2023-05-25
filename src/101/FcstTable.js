import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import getxy from './getxy.json'


const FcstTable = ( {datas, optionValue, gubun, ultraInfo} ) => {
    console.log("datas", datas)
    console.log("optionValue", optionValue)
    console.log("gubun", gubun)
    console.log("ultraInfo", ultraInfo)

    // UltraSrtFcst에서 넘어온 optionValue와 값이 datas의 값과 같은 경우 확인
    const seletedOption = datas.filter((item) =>
        datas.item)


    // const trShow = 

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
                    {trShow}
                </tbody>
            </table>
        </article>
    )
}

export default FcstTable;