import { useState, useEffect } from "react";
import FcstTable from './FcstTable'

const VilageFcst = () => {
    const [items, setItems] = useState();

    useEffect(() => {

        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
        url = url + 'serviceKey=hyoIULZ88PwumdTwE1QtyLqAJk%2BjALZVCkgdEZDEeRtW2ORIERBpnmJzo2gG%2F0wckQYz8tuDq3drlrOa9hv2rQ%3D%3D';
        url = url + '&numOfRows=900';
        url = url + '&pageNo=1';
        url = url + '&base_date=20230525';
        // !!!!!!!!!!
        url = url + '&base_time=0500';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + '&dataType=json';
        // console.log('url', url); 

        fetch(url)
         .then((resp) => resp.json())
         .then((data) => setItems(data.response.body.items.item))
        //  .then((data) => console.log("data", data))
         .catch((err) => console.log(err))
    }, []);

    // useEffect(() => {
    // }, [items])

    return (
        <>
        {items && <FcstTable items={items} gubun='단기예보'/>}
        </>
    )
}

export default VilageFcst;