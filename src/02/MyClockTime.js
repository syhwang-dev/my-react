// import { useState, useEffect } from "react";

// const MyClockTime = () => {
//     // let myTime = new Date().toLocaleTimeString();
    
//     const [time, setTime] = useState(new Data());

//     useEffect(() => {
//         const id = setInterval(() => {
//           setTime(new Date());
//         }, 1000);
//         return (() => clearInterval(id))
//       }, []);

//     return (
//         <footer>
//             {/* <h1>{myTime}</h1> */}
//             <h1>{time.toLocaleTimeString()}</h1>        
//         </footer>
//     );
// }

// export default MyClockTime;

// ↑ 잘 안 됨

// 여기서 부터 시작을 했었다! 시곈데 멈춰있어;
// 1초에 한번 씩 재랜더링하길 원한다. → setInterval을 쓰면 된다!
// import { useState } from "react";

// const MyClockTime = () => {
//     let t = new Date().toLocaleTimeString();

//     return (
//         <footer>
//             <h1>{t}</h1>
//         </footer>
//     );
// }


// import { useState } from "react";

// const MyClockTime = () => {
//     // let myTime = new Date().toLocaleTimeString();
//     let t = new Date().toLocaleTimeString();
//     // setInterval(() => console.log);
//     const [myTime, setMytime] = useState(t);

//     // let cnt = 0;
//     // setInterval에는 콜백함수가 들어가야 한다.
//     setInterval(() => setMyTime(new Date().toLocaleTimeString()), 1000);


//     return (
//         <footer>
//             <h1>{myTime}</h1>
//         </footer>
//     );
// }

// export default MyClockTime;


// const MyClockTime = () => {
//     let myTime = new Date().toLocaleTimeString();
 
//     return (
//         <footer>
//             <h1>{myTime}</h1>
//         </footer>
//     );
// }

// export default MyClockTime;

// ↑ 여기까지는 됨.

// 시작~
// 1. useState import
import { useState } from "react";
const MyClockTime = () => {
    // let myTime = new Date().toLocaleTimeString();
    // 2. state 변수 선언
    // conset [myTime, setMyTime] = useState();  // []: 배열을 의미
    // conset [myTime, setMyTime] = useState(); // useState() 함수는 변수와 변수를 바꿀 수 있는 함수 두 개를 돌려줌.
    const [myTime, setMyTime] = useState(new Date().toLocaleTimeString());
    
    // 3. 1초에 한번씩 state변수 변경
    // setInterval: JS 함수
    // setInterval(()=>{
    //     myTime = new Date().toLocaleTimeString();
    // }, 1000);
    // myTime을 바꿀거니 이렇게 하면 안 돼? 이게 안 된다!

    // setInterval의 문법은 콜백함수
    setInterval(() => {
        setMyTime(new Date().toLocaleTimeString());
    }, 1000);


    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;