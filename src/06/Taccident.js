// import dataTaccident from './dataTaccident.json'

// const Taccident = () => {
//     // 데이터 가져오기
//     // console.log(dataTaccident);  // 전체 데이터를 가져오게 됨.
//     // 오브젝트에 접근하는 아래의 두 가지 방법은 같음.
//     // console.log(dataTaccident['data']);
//     console.log(dataTaccident.data);

//     // 값이 변하지 않으므로 const
//     const data = dataTaccident.data;  // 사고건수 obj 배열 (15개)
//     console.log(data);

//     // data.map((item, idx) => 
//     //     console.log('data:', data[item])
//     // );

//     let c1 = data.map((item) => data.사고유형_대분류);
//     // let c1 = data.map((item) => data['사고유형_대분류']);
//     console.log(c1)

//     return (
//         <>
//         </>
//     )
// }

// export default Taccident


// import dataTaccident from './dataTaccident.json'

// const Taccident = () => {
//     const data = dataTaccident.data;  

//     let c1 = data.map((item) => item.사고유형_대분류);
//     // let c1 = data.map((item) => data['사고유형_대분류']);
//     // console.log(c1);

//     c1 = new Set(c1);
//     console.log("Set: ", c1);

//     // 스프레드 연산자를 사용하여 집합(Set)을 배열로 변환
//     c1 = [...c1]
//     console.log("Array: ", c1);

//     // "사고유형_대분류"와 "사고유형_중분류" 값 가져오기
//     let c2 = [];
//     c2 = data.map((item, idx) =>

//     c2 = [item.사고유형_대분류, item.사고유형_중분류]
    
//     );
//     console.log("c2:", c2)

//     return (
//         <>
//         </>
//     )
// }

// export default Taccident;



import dataTaccident from './dataTaccident.json'
import TaccidentNav1 from './TaccidentNav1';
import TaccidentNav2 from './TaccidentNav2';
import { useState, useEffect } from 'react';

const Taccident = () => {
    const data = dataTaccident.data;  

    let c1 = data.map((item) => item.사고유형_대분류);

    c1 = new Set(c1);
    c1 = [...c1]
    console.log("c1: ", c1);

    // let temp = [];
    // map 사용 불가
    // const c2 = data.map((item) => {
    //     temp.push(item.사고유형_대분류);
    //     temp.push(item.사고유형_중분류);
    // });

    // const c2 = [];
    // for(let item of data) {
    //     // let temp = [];
    //     // temp.push(item.사고유형_대분류);
    //     // temp.push(item.사고유형_중분류);

    //     let temp = [item.사고유형_대분류, item.사고유형_중분류];
    //     // temp.push(item.사고유형_대분류);
    //     // temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }

    const c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류])
    // console.log("c2: ", c2);

    const [sel1, setSel1] = useState(0);  // 대분류 선택
    const [sel2, setSel2] = useState([]); // 중분류 선택
    const [selData, setSelData] = useState({}); 
    
    useEffect(() => {
        console.log('Taccident sel1 useEffect []', sel1);
    }, []);

    useEffect(() => {
        console.log('Taccident sel1 useEffect sel1', sel1);
    }, [sel1]);

    useEffect(() => {
        console.log('Taccident sel2 useEffect', sel2);
        let temp = data.filter((item) =>
            item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]);
        setSelData(temp[0]);
        // console.log("setSelData(temp[0])!!!!!!!!!!!!!!", setSelData(temp[0]));
    }, [sel2, data]);

    useEffect(() => {
        console.log('Taccident selData useEffect', selData);
        
        // const = []

    }, [selData])

    useEffect(() => {
        console.log('Taccident sel1 useEffect', sel1);
        console.log('Taccident sel1 useEffect', sel2);
    });


    return (
        <main className='container'>
            <article>
                <header>
                    {/* 현재 Taccident / TaccidentNav1 / TaccidentNav2 굉장히 의존적인 코드 */}
                    {/* Taccident에서 모든 useState, useEffect를 만들어서 넘김. */}
                    <TaccidentNav1 c1={c1} sel1 = {sel1} setSel1 = {setSel1}/>
                    <TaccidentNav2 c2={c2} sel1 = {sel1} sel2 = {sel2} setSel2 = {setSel2}/>
                    {/* <nav>
                        <ul>
                            <li><strong>Brand</strong></li>
                        </ul>
                        <ul>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#" role="button">Button</a></li>
                        </ul>
                    </nav> */}
                </header>
            </article>
            <div>
                <div>상세내용</div>
            </div>

        </main>
    )
}

export default Taccident;