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

import { useEffect, useState } from "react";

const MyClockTime = () => {
    // let myTime = new Date().toLocaleTimeString();
    let t = new Date().toLocaleTimeString();
    const [myTime, setMytime] = useState(t);

    let cnt = 0;
    // setTimeout(setMyTime(new))

    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}