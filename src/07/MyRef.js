

// const MyRef = () => {
//     let cnt1 = 1;

//     const showCnt = () => {
//         console.log('cnt1 = ', cnt1)
//     }

//     const showCnt1 = () => {
//         cnt1 = cnt1 +1;
//         showCnt();
//     }

//     return (
//         <main className="container">
//             <article>
//                 <header>
//                     <div className="grid">
//                         <div><h1>컴포넌트 변수 : {cnt1}</h1></div>
//                     </div>
//                 </header>
//                 <div className="grid">
//                     <button onClick={() => showCnt1()}>컴포넌트 변수</button>
//                 </div>
//             </article>
//         </main>
//     )
// }

// export default MyRef;

// ↑ cnt1의 증가가 화면에 보이지 않는다. 그래서 useState를 사용한다.

import {useRef, useState, useEffect} from "react";

const MyRef = () => {
    const txtref = useRef();
    // 포커스 사용 비교를 위한 예
    // const txtref2 = useRef();

    const itemArr = useRef([]);  // useRef([]): 배열을 초기값으로 설정
    const [itemTag, setItemTag] = useState();

    useEffect(() => {
        // 새로고침 했을 때 커서가 깜박임.
        txtref.current.focus();
    }, []);  // 랜더링이 최초로 되었을 때 반영되어야 하므로 [] 사용함.

    const addItem = (e) => {
        // console.log("addItem");
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];
        console.log("addItem", itemArr.current);

        // set 코드 추가할 예정
    }

    const resetItem = () => {
        // console.log("resetItem");

    }

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />
                                {/* <input ref={txtref2} type="text" id="txt2" name="txt2" required /> */}
                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div className="grid">
                    {itemTag}
                </div>
            </article>
        </main>
    )
}

export default MyRef;