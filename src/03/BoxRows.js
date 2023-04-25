// import './Box.css'
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

    // 클릭 이벤트
    const showMv = (row) => {
        console.log(row);
        setFootTag(row.movieCd);
    }
    for (let row of mv) {
        let icon ;
        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '⏺';
        else if (intent < 0) icon = '🔽';
        else icon = '🔼';



        trTags.push(
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
            {trTags}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={4}>{footTag}</td>
            </tr>
        </tfoot>
        </>
    );
}

export default BoxRows;
