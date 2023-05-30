import { useState, useEffect, useRef } from "react";
const CntInput = ({val, setVal}) => {
        const decrease = (e) => {
            // form 태그 때문에 사용해야 함.
            e.preventDefault(); 
            // if (val > 0) {
            //     setVal(val - 1);
            // }
            if (val-1 < 0) setVal(0);
            else setVal(val-1);
        }
    
        const increase = (e) => {
            e.preventDefault();
            // setVal((val)=>val+1);
            // setVal(val + 1);
            if (val+1 > 10) setVal(10);
            else setVal(val+1);
    
            // Step08-1. val 값 출력
            // console.log(n) // n의 값은 출력되지 않음.
        }
    


    return (
        <article>
        <form>
            <div className="grid">
                <div></div>
                {/* Step04. onClick 함수 추가 */}
                {/* button 태그는 event를 받을 수 있음. */}
                <div><button onClick={(e) => decrease(e)}>-</button></div>
                {/* Step03. value 속성 추가 */}
                <div><input type="text" id="txt1" value={val} name="txt1" readOnly/></div>
                {/* Step06. onClick 함수 추가 */}
                <div><button onClick={(e) => increase(e)}>+</button></div>
                <div></div>
            </div>
        </form>
    </article>
    )
}

export default CntInput;