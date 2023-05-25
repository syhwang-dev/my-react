// Fcst_onePage → Fcst
// 초단기와 단기를 사용하는 코드로 변경 - 일부 코드만 변경하면 됨.
// 쪼개기

import { useState, useEffect, useRef } from "react";
import getcode from './getcode.json'
import FcstTable from './FcstTable.js'

const Fcst = () => {
    const [items, setItems] = useState();
    const [trTags, setTrTags] = useState();
    const [opTags, setOpTags] = useState();
    const sel = useRef();

    useEffect(() => {

        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
        url = url + 'serviceKey=hyoIULZ88PwumdTwE1QtyLqAJk%2BjALZVCkgdEZDEeRtW2ORIERBpnmJzo2gG%2F0wckQYz8tuDq3drlrOa9hv2rQ%3D%3D';
        url = url + '&numOfRows=900';
        url = url + '&pageNo=1';
        url = url + '&base_date=20230525';
        url = url + '&base_time=0630';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + '&dataType=json'; 

        fetch(url)
         .then((resp) => resp.json())
         .then((data) => setItems(data.response.body.items.item))
         .catch((err) => console.log(err))

        let tempcd = getcode.filter((i) => i["예보구분"] === "초단기예보")
        console.log(tempcd)

        tempcd = tempcd.map((i) =>
            <option value={i["항목값"]} key={i["항목값"]}>{i["항목명"]}({(i["항목값"])})</option>
        );
        setOpTags(tempcd)
    }, []);

    useEffect(() => {
    }, [items]);

    const showItem = (e) => {
        e.preventDefault();
        console.log('sel', e.target.value)
        console.log('sel', sel.current.value)

        if (items === undefined) return;
        let temp = items.filter((i) => i.category === sel.current.value)
        let tempcd = getcode.filter((i) =>
            i["예보구분"] === "초단기예보" &&
            i["항목값"] === sel.current.value
        )

        tempcd = tempcd[0];
        console.log('tempcd', tempcd)
        
        let skyobj = {'1': '☀', '3': '⛅', '4': '☁'}
        let ptyobj = {'0': '없음', '1': '비', '2': '비/눈', '3': '눈', '5': '빗방울', '6': '빗방울눈날림', '7': '눈날림'} 

        temp = temp.map((i, idx) =>
            <tr key={i.category + idx}>
                <td>{tempcd["항목명"]}</td>
                <td>{i.fcstDate}</td>
                <td>{i.fcstTime}</td>
                <td>
                    { (i.category === 'SKY') ? skyobj[i.fcstValue]
                    : (i.category === 'PTY') ? ptyobj[i.fcstValue]
                    :i.fcstValue + tempcd['단위'] } 
                </td>
            </tr>
        );
        console.log('temp', temp) 
        setTrTags(temp)
        
        console.log('items', items) 
    }
    
    return (
        <>
        {items && <FcstTable  items={items} gubun='단기예보'/>}
        </>
    )
}

export default Fcst;