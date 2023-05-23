import {Link, useParams} from 'react-router-dom';
import FcstTable from "./FcstTable";
import { useState, useEffect, useRef } from 'react';
import getCode from './getcode.json'

const UltraSrtFcst = () => {
    // console.log("useParams", useParams());
    const date = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;
    const area = useParams().area;

    let year = date.substring(0, 4);
    let mon = date.substring(4, 6);
    let dt = date.substring(6);

    const [datas, setDatas] = useState();
    const [itemName, setItemName] = useState();

    const ultraInfo = getCode.filter((item) =>
        item["예보구분"] === "초단기예보"
    );

    const opt = ultraInfo.map((item, idx) =>
        <option value={item["항목값"]} key={item["항목값"+idx]}>{item["항목명"]}({item["항목값"]})</option>
    );

    useEffect(() =>{
        // console.log("useEffect" , datas)
    }, [datas]);

    useEffect(() =>{
        let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=hyoIULZ88PwumdTwE1QtyLqAJk%2BjALZVCkgdEZDEeRtW2ORIERBpnmJzo2gG%2F0wckQYz8tuDq3drlrOa9hv2rQ%3D%3D&numOfRows=60&pageNo=1&base_date=${date}&base_time=0630&nx=${x}&ny=${y}&dataType=json`
        // console.log("url", url);
        
        fetch(url)
         .then((resp) => resp.json())
         .then((data) => {
            setDatas(data.response.body.items)
        })
         .catch((err) => console.log(err))
    }, []);

    

    return (
        <article>
            <div className="grid">
                <div>
                    <span>{area}의 초단기예보 ({year}-{mon}-{dt})</span>
                </div>
                <div>
                    <select onChange={(e) => setItemName(e.target.value)}>
                        <option value="" >선택</option>
                        {opt}
                    </select>
                </div>
            </div>

            {/* <header>{useParams().area}</header> */}
            {/* <header>{area}</header> */}
            {datas && <FcstTable datas={datas} itemName={itemName} gubun="초단기예보" />}

        </article>
    )
}

export default UltraSrtFcst;