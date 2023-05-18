import {Link} from 'react-router-dom';
import getxy from './getxy.json'
import { useRef } from 'react';

const FcstMain = () => {
    const dt = useRef();
    
    // const ops = [];
    
    // getxy는 이미 배열임
    const ops = getxy.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>
    );
    console.log(getxy);

    const ultraShow = (e) => {
        e.preventDefault();
        // getxy

        let apikey = 'hyoIULZ88PwumdTwE1QtyLqAJk%2BjALZVCkgdEZDEeRtW2ORIERBpnmJzo2gG%2F0wckQYz8tuDq3drlrOa9hv2rQ%3D%3D';
        // let url = 
        

    } 

    return (
        <article>
            <header><h1>FcstMain</h1></header>
            <div className='grid'>
                <div>
                    <input ref={dt} type="date" id="dt" name="dt" />
                </div>
                {/* <label for="fruit"></label> */}
                <div>
                    <select id="sel" name="sel">
                    <option value="" selected>선택</option>
                    {ops}
                </select>
                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to='/ultra' role='button' onClick={(e) => ultraShow(e)}>초단기예보</Link>
                    <Link to='/vilage' role='button'>단기예보</Link>
                </div>
            </footer>
        </article>
    )
}

export default FcstMain;