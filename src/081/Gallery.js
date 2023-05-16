import { useState, useEffect, useRef } from 'react';
import style from './Gallery.module.css'
import GalleryView from './GalleryView';
const Gallery = () => {

    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);
        getData();
    }, [])


    // 4. state 변수 Step01. state 변수 만들기
    // 7. items의 언디파인드가 넘어갈 것임.
    const [items, setItems] = useState();

    // 1. 포커싱 주기 Step02. input 제어
    const txt1 = useRef();

    // 1. 포커싱 주기 Step03.
    // 컴포넌트가 처음 랜더링되었을 때 한번 실행
    useEffect(()=>{
        // input 포커스 맞추기
        txt1.current.focus();
    }, []);

    // 컴포넌트 해당하는 state변수가 변경될 때 마다 실행
    useEffect(()=>{
        console.log("useEffect", items)
    }, [items]);

    // 4. 사용자 정의 함수 Step02. 인코딩한 정보 전달 - 함수 만들기
    const getData = async (kw, num, no) => {

        setLoading(false)
        // 5. url 사용하기
        let apikey = 'RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D'
        // 기본 요청 주소
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${apikey}`

        // 요청 변수와 요청 변수는 & 기호로 묶여있음.
        // url = url + `&numOfRows=10`
        // `&numOfRows=${num}`: 몇 개 날라오는지 제어
        url = url + `&numOfRows=${num}`
        
        // url = url + `&pageNo=1`
        // 페이징 기능을 사용한다면 pageNo=1를 변수 처리할 수 있음.
        url = url + `&pageNo=${no}`

        url = url + `&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`
        
        // fetch 하기 전에 반드시 값 찍어보기
        console.log("url", url)

        // 6. fetch Step01. resp
        fetch(url)
        // .then((resp) => console.log(resp))
        // 6. fetch Step02. json
        .then((resp) => resp.json())

        // 6. fetch Step03. data 
        // body도 items도 object임.
        // .then((data) => console.log(data.response.body.items.item))
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err))
    }

    // 2. 확인 & 취소 함수 만들기 Step02. 사용자 정의 함수
    const show = (e) => {
        e.preventDefault();

        // 3. txt1 활용하기 Step02.
        // 공백 체크
        if ( txt1.current.value === '') {
            alert('키워드를 입력해주세요.');
            txt1.current.focus();
            return;
        }

        // 3. txt1 활용하기 Step02. 키워드 입력
        // 한글이 그대로 나오면 안 되고 인코딩되어야 함.
        // const kw = txt1.current.value;
        // console.log(kw);

        // 3. txt1 활용하기 Step03. 인코딩한 키워드
        const kw = encodeURI(txt1.current.value);
        getData(kw, 10, 1);
        // getData(kw, 20); numOfRows의 값을 20개 가져오고 싶다면 이런 방식으로 사용할 수 있음. 
        console.log(kw);
    }

    // 2. 확인 & 취소 함수 만들기 Step03.
    const showClear= (e) => {
        e.preventDefault();
    }

    return (
        <main className="container">
            <form > 
                <article>
                    <header>
                        <h1>한국관광공사 - 관광사진 정보</h1>
                    </header>
                    <div className="grid">
                        <div>
                            {/* 1. 포커싱 주기 Step01. ref={txt1} */}
                            {/* 3. txt1 활용하기 Step01. */}
                            <input ref={txt1} type='text' id='txt1' name='txt1' placeholder='키워드를 입력하세요.' required/>

                        </div>
                        <div className={style.btDiv}>
                            {/* 2. 확인 & 취소 함수 만들기 Step01. */}
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>
                </article>  
            </form>
            {/* 7. 프롭스로 넘기기 Step01. content 넘기기 */}
            {items && <GalleryView content={items} />}
            {/* 7. 프롭스로 넘기기 Step02. 공백 체크 부분의 코드가 없을 땐 에러 발생 - */}
        </main>
    )
}

export default Gallery;
