// const MyDivArticle = () => { // 속성 처리: 1. 괄호 안에서 던져진 속성(aname)을 받는다. 어떻게? probs 넣기~
// const MyDivArticle = (probs) => {

//     return (
//         <article>
//             {/* 2. 중괄호 안에서 probs를 부르쟈! */}
//             {/* <header><h1>{probs.aname || 'MyDiv0'}</h1></header>: 아무 것도 없을 땐 MyDiv0를 써라~ */}
//             <header><h1>{probs.aname || 'MyDiv0'}</h1></header>
//             <ul>
//                 <li>item1</li>
//                 <li>item2</li>
//             </ul>
//         </article>

//     )
// }

// export default MyDivArticle;


// props 변수로 쓰기
// const MyDivArticle = (probs) => {
//     const aname = probs.aname;
//     return (
//         <article>
//             <header><h1>{aname || 'MyDiv0'}</h1></header>
//             <ul>
//                 {/* <li>{aname || 'MyDiv0' + '1'}</li> */}
//                 {/* 삼항연산으로 표현 */}
//                 <li>{!aname ? aname : 'MyDiv0'}1</li>
//                 {/* <li>{aname}1</li> */}
//                 <li>{aname}2</li>
//             </ul>
//         </article>

//     )
// }

// export default MyDivArticle;



// object 기호 + 키값 으로 표현하기
// const MyDivArticle = (probs) => {

// 매겨변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용
// const MyDivArticle = ({aname}) => {
//     // const aname = probs.aname;
//     // aname가 undefined 이면 '0'을 주겠다.
//     let n = (aname === undefined) ? '0' : aname.slice(-1);
//     console.log("n:", n)
//     // ↑ 리턴 위에 문법은 JS 문법이얌
//     return (
//         <article>
//             <header><h1>{aname || 'MyDiv0'}</h1></header>
//             <ul>
//                 {/* <li>{!aname ? aname : 'MyDiv0'}1</li> */}
//                 <li>{n === '0' ? 'MyDiv0' : 'MyDiv'+n}1</li>
//                 {/* <li>{aname}2</li> */}
//                 <li>{'MyDiv'+n }2</li>
//             </ul>
//         </article>

//     )
// }

// export default MyDivArticle;

// 두 import의 차이는?
// 전역으로 적용 
// import './MyDiv.css'
// 컴포넌트에 적용 / 여기에서만 적용! / 짚고 넘어가기: 모듈 별로 css를 만들 수 있더라~ / 컴포넌트 별로 관리하기에 용이
// import style from './MyDiv.module.css';

// const MyDivArticle = ({aname}) => {
//     let n = (aname === undefined) ? '0' : aname.slice(-1);
//     console.log("n:", n)
//     return (
//         <article>
//             <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
//             <ul className={style.aul}>
//                 <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv'+n}1</li>
//                 <li className={style.ali}>{'MyDiv'+n }2</li>
//             </ul>
//             {/* 현재 MyDiv들은 한 개의 컴포넌트에 의해 제어되고 있음. MyDiv 세 개 중에 MyDiv1에만 footer를 주려면 어떻게 하지? 아래에서 보자><*/}
//         </article>

//     )
// }

// export default MyDivArticle;


// footer 넣기
// import style from './MyDiv.module.css';

// const MyDivArticle = ({aname}) => {
//     let n = (aname === undefined) ? '0' : aname.slice(-1);
//     // console.log("n:", n) 
//     let cnt = 0;

//     return (
//         <article>
//             <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
//             <ul className={style.aul}>
//                 <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv'+n}1</li>
//                 <li className={style.ali}>{'MyDiv'+n }2</li>
//             </ul>
//             {/* 현재 MyDiv들은 한 개의 컴포넌트에 의해 제어되고 있음. MyDiv 세 개 중에 MyDiv1에만 footer를 주려면 어떻게 하지? 아래에서 보자><*/}
//             {/* <footer>{aname === 'MyDiv1'}안녕</footer> 이렇게 쓰니 전부 다 적용되넹^^;*/}
//             { n === '1' &&
//                 <footer>
//                     <h2>❤ {cnt}</h2>
//                 </footer>
//             }
//             {/* 점점 산으로...? */}
//         </article>

//     )
// }

// export default MyDivArticle;

// import style from './MyDiv.module.css';

// const MyDivArticle = ({aname}) => {
//     let n = (aname === undefined) ? '0' : aname.slice(-1);
//     // console.log("n:", n) 
//     let cnt = 0;

//     // click 이벤트 처리
//     const like = (n)=> {
//         cnt = cnt + n;
//         console.log(cnt);
//     }

//     return (
//         <article>
//             <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
//             <ul className={style.aul}>
//                 <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv'+n}1</li>
//                 <li className={style.ali}>{'MyDiv'+n }2</li>
//             </ul>
//             {/* 현재 MyDiv들은 한 개의 컴포넌트에 의해 제어되고 있음. MyDiv 세 개 중에 MyDiv1에만 footer를 주려면 어떻게 하지? 아래에서 보자><*/}
//             {/* <footer>{aname === 'MyDiv1'}안녕</footer> 이렇게 쓰니 전부 다 적용되넹^^;*/}
//             { n === '1' &&
//                 <footer>
//                     {/* 이벤트 넣기 / span 만들기*/}
//                     {/* <h2><span onClick={() => console.log(cnt)}>❤</span> {cnt}</h2>  0만 계속 늘어난다! 증가시키자! */}
//                     {/* <h2><span onClick={() => {cnt++; console.log(cnt)}}>❤</span> {cnt}</h2> 하지만 길어서 보기 싫다! */}
//                     {/* <h2><span onClick={like}>❤</span> {cnt}</h2> */}
//                     {/* 인수를 넣을 수 있음. 그리고 밑의 코드는 콘솔에는 누를 때 마다 증가가 되지만 화면에는 안 되네...? */}
//                     {/* <h2><span onClick={() => like()}>❤</span> {cnt}</h2>  */}
//                     {/* 2씩 증가시키기 n=2 / 인수를 안 줘도 됨. */}
//                     {/* <h2><span onClick={() => like(2)}>❤</span> {cnt}</h2> */}
//                     <h2><span onClick={() => like(2)}>❤</span> {cnt}</h2>

//                     {/* 알아야 할 것 / 한 번 랜더링이 되고 나면 바뀌지 않고, cnt가 증가할 때마다 재랜더링 해야 함. 사이클 동안 업데이트 되는 방법을 찾아야 함 */}

                    
//                 </footer>
//             }
//         </article>

//     )
// }

// export default MyDivArticle;



//// state 변수 사용하기 - 단계별로 보기
import style from './MyDiv.module.css';

// state 변수 사용 1단계
import { useState } from 'react';

const MyDivArticle = ({aname}) => {
    let n = (aname === undefined) ? '0' : aname.slice(-1);
    // let cnt = 0;

    // state 변수 사용 2단계: 변수 사용
    // []: 배열 기호 / useState는 리액트의 함수이며, 리턴값이 있을 것이고 각각 cnt와 setCnt로 받을 것이다. / useState 리액트 개발자들이 짠 함수 / 두 개가 반환 됨.
    // 대부분의 언어에서 return은 한 개 / 파이썬은 여러 개 - 하지만 알고보면 튜플
    const [cnt, setCnt] = useState(0);

    // click 이벤트 처리
    const like = (n)=> {
        // cnt = cnt + n;
        // state 변수 사용 3단계: 변수 내용 변경
        setCnt(cnt + 1);
        console.log(cnt);
    }

    return (
        <article>
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv'+n}1</li>
                <li className={style.ali}>{'MyDiv'+n }2</li>
            </ul>

            { n === '1' &&
                <footer>
                    <h2><span onClick={() => like()}>❤</span> {cnt}</h2>
                </footer>
            }
        </article>
    )
}

export default MyDivArticle;