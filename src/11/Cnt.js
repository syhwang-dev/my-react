import { useState, useEffect, useRef } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";

const Cnt = () => {
    // Step02. 화면에 재랜더링이 발생하므로 state 변수 만들어야 함. - 2개의 값이 넘어오게 되며, 배열 안에 들어감.
    const [val, setVal] = useState(0);
    // val: 상태를 관리하는 변수명
    // setVal 함수를 통해 값을 변경할 수 있음.

    // // Step05. 값 감소
    // const decrease = (e) => {
    //     // form 태그 때문에 사용해야 함.
    //     e.preventDefault(); 
    //     // if (val > 0) {
    //     //     setVal(val - 1);
    //     // }
    //     if (val-1 < 0) setVal(0);
    //     else setVal(val-1);
    // }

    // // Step07. 값 증가
    // const increase = (e) => {
    //     e.preventDefault();
    //     // setVal((val)=>val+1);
    //     // setVal(val + 1);
    //     if (val+1 > 10) setVal(10);
    //     else setVal(val+1);

    //     // Step08-1. val 값 출력
    //     // console.log(n) // n의 값은 출력되지 않음.
    // }

    // Step08-2. val 값 출력 - useEffect 사용
    useEffect(() => {
        console.log("val", val);

    }, [val])

    return (
        // Step01. 출력 화면 구성
        <main className="container">
            {/* Step09-2. CntInput 컴포넌트 생성 */}
            <CntInput val={val} setVal={setVal}/>
            {/* Step09-2. CntDisp 컴포넌트 생성 */}
            <CntDisp val={val} />


        </main>
    );
}

export default Cnt;