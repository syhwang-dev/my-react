import { useState, useEffect } from "react";
import FcstTable from './FcstTable'

const UltraFcst = () => {
    const [items, setItems] = useState();

    useEffect(() => {

        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        url = url + 'serviceKey=hyoIULZ88PwumdTwE1QtyLqAJk%2BjALZVCkgdEZDEeRtW2ORIERBpnmJzo2gG%2F0wckQYz8tuDq3drlrOa9hv2rQ%3D%3D';
        url = url + '&numOfRows=60';
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
    }, []);

    return (
        <>
        {items && <FcstTable items={items} gubun='초단기예보'/>}
        </>
    )
}

export default UltraFcst;