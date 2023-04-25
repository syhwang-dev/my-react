// props를 사용하는 방법1.
// const BoxRows = (props) => {
//     // 이 mvlist는 Box의 mvlist와 전혀 다름.
//     const mvlist = [...props.mv]
//     console.log("boxrows", mvlist)
//     // props.mv 이렇게 계속 써도 됨.
//     return (
//         <>
//         <tr>
//             <td>1</td>
//             <td>2</td>
//             <td>3</td>
//             <td>4</td>
//         </tr>
//         </>
 
//     );
// }

// export default BoxRows;

// td 내용이 안 나옴;
// const BoxRows = ({mv}) => {
//     // mv는 배열임.
//     // console.log("boxrows", mv)
//     let trTags = [];
//     for (let row of mv) {
//         // 왜 로그가 두번씩 나오지? index,js에서 <React.StrictMode></React.StrictMode> 태그 주석 처리하기
//         // console.log("값: ", row.rank, row.movieNm, row.salesAmt, row.rankInten);
//         trTags.push(
//         <tr>
//             <td>{row.rank}</td>
//             <td>{row.movieNm}</td>
//             <td>{parseInt(row.salesAmt).toLocaleString()}</td>
//             <td>{row.rankInten}</td>
//         </tr>
//         );
//     }
//     console.log(trTags);
//     return (
//         <>
//         </>
//     );

// }

// export default BoxRows;

import './Box.css'
const BoxRows = ({mv}) => {
    let trTags = [];
    for (let row of mv) {
        let icon ;
        // 이 부분은 자바스크립트 영역이므로 중괄호 안 써도 됨
        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '⏺';
        else if (intent < 0) icon = '🔽';
        else icon = '🔼';

        trTags.push(
            // 아래 부분은 JSX 문법이라 중괄호 필요
        // key는 유일해야 함.
        // <tr>
            <tr className="mytr" key={row.movieCd}>
            <td>{row.rank}</td>
            <td>{row.movieNm}</td>
            <td>{parseInt(row.salesAmt).toLocaleString()}</td>
            <td>{icon}{Math.abs(intent)}</td>
            {/* <td>{icon}{intent === 0 ? Math.abs(intent)}</td> 0일 때 안 보이고 싶을 때, 여기서 if문을 사용할 수 없으니 삼항연산자 사용 */}
        </tr>
        );
    }
    console.log(trTags);
    return (
        <>
        {trTags}
        </>
    );

}

export default BoxRows;
