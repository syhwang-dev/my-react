const TaccidentNav2 = ({c2, sel1, sel2, setSel2}) => {
    // console.log("c2 값 가져오기", c2)
    
    // 이 코드는 15개 다 나옴.
    // const btTag = c2.map((item) =>
    //     <li key={item}>
    //         {/* <button onClick={(item2) => show(item)}>{item}</button> */}
    //         <button onClick={(item) => setSel2()}>{item}</button>
    //     </li>
    // );

    // sel1에 해당하는 것만 나와야 함. - filter 함수 사용
    const c2Arr = c2.filter((item) => item[0] === sel1);
    console.log('c2Arr', c2Arr);

    const btTag2 = c2Arr.map((item) =>
        <li key={item}>
            <button onClick={() => setSel2(item)}>{item[1]}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <h2>사고유형 중분류</h2>
            </ul>
            <ul>
                {btTag2}
            </ul>
        </nav>
    )
}
export default TaccidentNav2;