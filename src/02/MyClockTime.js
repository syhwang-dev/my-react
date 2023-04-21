// const MyClockTime = () => {
//     // 현재는 시간이 실시간으로 작동하지 않음. 시간이 멈춰있음. 시간이 계속 1초마다 바뀌어야 하고, 이는 랜더링을 시켜야 한다는 것을 의미함.
//      // 이 상황에서는 스테이트 훅을 사용해야 함.
//     let myTime = new Date().toLocaleTimeString();
//     return (
//         <footer>
//             <h1>{myTime}</h1>
//         </footer>
//     );
// }
// export default MyClockTime;

// 이렇게 필요한 것을 컴포넌트 만들어가야 함.

// 리액트 특징
// 리턴에는 jsx가 들어감.
// 리액트는 가상 돔을 사용

// 주의사항
// 1. 컴포넌트는 대문자로 시작
// 2. class -> className / 그런데 id는 id 그대로 사용 / 뭐임;
// -> class를 그대로 쓰면 충돌이 일어나기 때문에.


const MyClockTime = () => {
    // 현재는 시간이 실시간으로 작동하지 않음. 시간이 멈춰있음.
    let myTime = new Date().toLocaleTimeString();
    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;