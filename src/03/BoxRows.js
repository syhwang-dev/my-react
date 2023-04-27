import './Box.css'
// import { useState } from "react";

// const BoxRows = ({mv}) => {
//     let trTags = [];
//     for (let row of mv) {
//         let icon ;
//         let intent = parseInt(row.rankInten);
//         if (intent === 0) icon = '⏺';
//         else if (intent < 0) icon = '🔽';
//         else icon = '🔼';

//         const [footTag, setFootTag] = useState();

//         // 클릭 이벤트
//         const showMv = (row) => {
//             console.log(row);
//             setFootTag(row.movieCd);
//         }

//         trTags.push(
//             <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
//             <td>{row.rank}</td>
//             <td>{row.movieNm}</td>
//             <td>{parseInt(row.salesAmt).toLocaleString()}</td>
//             <td>{icon}{Math.abs(intent)}</td>
//         </tr>
//         );
//     }
//     return (
//         <>
//         <tbody>
//             {trTags}
//         </tbody>
//         <tfoot>
//             <tr>
//                 <td colSpan={4}>{footTag}</td>
//             </tr>
//         </tfoot>
//         </>
//     );
// }

// export default BoxRows;

// 에러 코드


import './Box.css'
import { useState } from "react";


const BoxRows = ({mv}) => {
    let trTags = [];

    const [footTag, setFootTag] = useState();

    // 시도 3-1. 교수님 방법
    // const [detail, setDetail] = useState([1, 2, 3]);  // 배열로 받는 것이 가능하지만 부담
    const [detail, setDetail] = useState('');  // 위의 코드를 참고해서 useState() 안에는 값이 하나만!
        

    // 클릭된 자료 확인 - 클릭 이벤트
    const showMv = (row) => {  // 꼭 row라는 파라미터를 안 써도 됨! line을 써도 돼~
        console.log(row);  // {rnum: '1', rank: '1', rankInten: '0', rankOldAndNew: 'OLD', movieCd: '20231089', …} 값이 보인다.
        // setFootTag(row.movieCd);

        // 시도 1.
        // let arr = ["[" + row.movieCd + "]" + ' ' + row.movieNm, ' ' + "개봉일: " + row.movieCd];
        // setFootTag(arr);

        // 시도 2.
        // let arr = '';
        // arr = `<div>[${row.movieCd}]  ${row.movieNm} 개봉일: ${row.movieCd}</div>`
        // document.querySelector('#idArr').innerHTML = arr

        // 시도 3-3.
        let tempTag =
        // <div>
        // <span className='tempsp1'>[{row.movieCd}]</span>
        // <span className='tempsp2'>{row.movieNm}</span>
        // <span className='tempsp2'>개봉일: {row.openDt}</span>
        // </div>

        <tr>
            <td className='tempsp'>[{row.movieCd}]</td>
            <td className='tempsp'>{row.movieNm}</td>
            <td colSpan={2} className='tempsp'>개봉일: {row.openDt}</td>
        </tr>
    
        setDetail(tempTag);

    }
    for (let row of mv) {
        let icon ;
        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '⏺';
        else if (intent < 0) icon = '🔽';
        else icon = '🔼';

        trTags.push(
            // tr태그에  onclick → tr 한 줄에 클릭이 발생하면 함수 호출 / 클릭이 되면 showMv 함수를 찾게 될 것이고 이 함수를 내가 짜야함.
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{Math.abs(intent)}</td>
            </tr>
        );
    }

    return (
        <>
        <tbody>
            {/* td 10개가 들어와야하는 위치 */}
            {/* <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr> */}
            {trTags}
        </tbody>
        <tfoot>
            <tr className='tftr'>
                {/* <td colSpan={4} id="idArr">{footTag}</td> */}
                {/* 시도 3-2. */}
                <td colSpan={4} id="idArr">{detail}</td>
            </tr>
        </tfoot>
        </>
    );
}

export default BoxRows;
