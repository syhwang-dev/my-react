import {Link, useParams} from 'react-router-dom';
import FcstTable from "./FcstTable";
import { useState, useEffect, useRef } from 'react';
import getCode from './getcode.json'

const UltraSrtFcst = () => {

    const date = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;
    const area = useParams().area;

    // 20230523
    let year = date.substring(0, 4);
    let mon = date.substring(4, 6);
    let dt = date.substring(6);
    // console.log("year!!!!", year);
    // console.log("mon!!!!", mon);
    // console.log("dt!!!!", dt);
    
    const [info, setInfo] = useState();
    
    // 항목값
    const [itemName, setItemName] = useState();
    
    const sel1 = useRef();

  
    

    // const opt = getcode.map((item) =>
    // <option value={item["예보구분"]} key={item["예보구분"]}>{item["항목명"]}({item["항목값"]})</option>
    // );



    const ultraInfo = getCode.filter((item) =>
        item["예보구분"] === "초단기예보"
    );
    // console.log("ultraInfo", ultraInfo);

    const opt = ultraInfo.map((item, idx) =>
        <option value={item["항목값"]} key={item["항목값"+idx]}>{item["항목명"]}({item["항목값"]})</option>
    )

    const getSel = () => {
        let temp = ultraInfo.filter((item) => item["예보구분"] === "초단기예보");
        console.log("temp!!!!", temp);
    }


    const getData = () => {
        let url_tmp = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst
        ?serviceKey=hyoIULZ88PwumdTwE1QtyLqAJk%2BjALZVCkgdEZDEeRtW2ORIERBpnmJzo2gG%2F0wckQYz8tuDq3drlrOa9hv2rQ%3D%3D&numOfRows=60&pageNo=1
        &base_date=20230521&base_time=0630&nx=55&ny=127&dataType=json`
        // 공백 & 엔터 사용 X

        let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst
        ?serviceKey=hyoIULZ88PwumdTwE1QtyLqAJk%2BjALZVCkgdEZDEeRtW2ORIERBpnmJzo2gG%2F0wckQYz8tuDq3drlrOa9hv2rQ%3D%3D&numOfRows=60&pageNo=1
        &base_date=${date}
        &base_time=0630
        &nx=${x}
        &ny=${y}
        &dataType=json`

        fetch(url)
         .then((resp) => resp.json())
        //  .then((data) => console.log("UltraData", data))
        .then((data) => {
            setInfo(data.response.body.items.item)
            console.log("setInfo", setInfo);
        })
         .catch((err) => console.log(err))

    }

    // useEffect(() => {
    //     getData();
    // }, [])

    return (
        <article>
            <div className="grid">
                <div>
                    {/* <span>{area}의 초단기예보({date})</span> */}
                </div>
                <div>
                    <select ref={sel1} onChange={() => getSel()}>
                        <option value="" >선택</option>
                        {opt}
                    </select>
                </div>
            </div>

            <header>
                <h2>{area}의 초단기예보 ({year}-{mon}-{dt})</h2>
            </header>
            <FcstTable info={info} itemName={itemName}></FcstTable>
        </article>
    )
}

export default UltraSrtFcst;