// // json 데이터 가져오기
// import data from './dataFrcst.json'

// const Frcst = () => {
//     // 이곳은 함수의 body 부분

//     // import 한 json의 값을 콘솔에서 확인해보기
//     // console.log(data);

//     // Key 순서대로 출력하기 - 날짜에 대해
//     const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];

//     dtKey.map((item) => console.log(data[item]))
    

//     return (
//         // return 안: 이곳은 날라가는(?) 부분
//         // console.log(data); 의 값을 확인할 수 없음.
//         <>

//         </>
//     );
// }

// export default Frcst


// json 데이터 가져오기
import style from'./Frcst.module.css'
import data from './dataFrcst.json'
// state 
import { useState } from 'react';

const Frcst = () => {

    // console.log("data: ", data);

    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    // dtKey.map((item) => console.log('dt:', data[item]))
    
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    // cnKey.map((item) => console.log('cn: ', data[item]))

    // 오브젝트 사용하기
    // 2023-01-30: "서울 ~ " 형태로 출력
    let dtcn = {} ;
    dtKey.map((item, idx) =>
        // console.log(item, idx));
        // console.log(data[item], data[cnKey[idx]]));

        dtcn[data[item]] = data[cnKey[idx]]

        );
    // console.log(dtcn);
    
    // cnKey.map((i, idx) =>
    //     console.log(idx, i)
    // );
    
    // ↑ 오브젝트와 배열의 관계 이해하기

    // 상세정보

    // const [dtCnt, setdtCnt] = useState();

    // let tempTag;
    const[bodyTag, setBodyTag] = useState();
    const[selDt, setSelDt] = useState();

    // 삼항연산으로 

    const detail = (k) => {
        let dtcnItem = dtcn[k].split(',');
        console.log(dtcnItem)

        // dtchItem = dtcn[k].replace(':', '')
        dtcnItem = dtcnItem.map((item) => item.split(':'));

        dtcnItem = dtcnItem.map((item) =>
            <div key={item[0]}>
                <span className={style.sp1}>{item[0]}</span>

                {/* 높음 / 보통 / 낮음 별로 색깔 다르게 1. */}
                {/* trim 공백 제거 */}
                {item[1].trim() === '낮음'? <span className={style.sp21}>{item[1]}</span>
                    : item[1].trim() === '보통'? <span className={style.sp22}>{item[1]}</span>
                    : <span className={style.sp23}>{item[1]}</span>}


                {/* 높음 / 보통 / 낮음 별로 색깔 다르게 2. */}
                <span className=''>
                </span>
            </div>

        )

        // console.log("detail", k, dtcn[k]);
        // state변수 3단계: 값 변경
        // setBodyTag(dtcn[k]);
        setBodyTag(dtcnItem);

    };


    let dtTag = [];
    // console.log(Object.keys(dtcn)); // 배열인 것을 알 수 있음.
    dtTag = Object.keys(dtcn).map((item) =>
                // <div key={idx}>{item}</div>  // key={idx} 이렇게 유일한 값을 주면 됨.
                <div className={selDt === item ? style.dt1 : style.dt}
                // <div className={style.dt}
                    key={item}
                    onClick={() => detail(item)}>{item}</div>
    );

    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>
                    <div className='grid'>
                        {/* 날짜가 들어가야 함. */}
                        {/* <div></div>
                        <div></div>
                        <div></div>
                        <div></div> */}
                        {dtTag}
                    </div>
                </header>
                <div className='grid'>
                    {bodyTag}
                </div>
            </article> 
        </main>
    );
}

export default Frcst