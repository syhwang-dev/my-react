import style from'./Taccident.module.css'

const TaccidentNav1 = ({c1, sel1, setSel1}) => {
    // console.log(c1)
    
    // 단순히 클릭되는 것을 확인하는 함수
    // const show = (item) => {
    //     console.log(item)
    // }

    // 클릭이벤트를 위한 useState는 Taccident.js
    const btTag = c1.map((item) =>
        <li key={item}>
            {/* <button onClick={(item2) => show(item)}>{item}</button> */}
            {/* <button onClick={(item2) => setSel1(item)}>{item}</button> setSel1(item)에 item 없으면 sel1에 아무 값도 저장되지 않음. */}
            <button className={style.but} onClick={() => setSel1(item)}>{item}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <h2>사고유형 대분류</h2>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>
    )
}
export default TaccidentNav1;