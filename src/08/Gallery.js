/*
한국관광공사: https://www.data.go.kr/iim/api/selectAPIAcountView.do
*/
import GalleryView from './GalleryView';
import { useState, useEffect, useRef } from 'react';
import style from './Gallery.module.css'
const Gallery = () => {
    // 키워드 input
    const txt1 = useRef();
    let kw;

    const [infoList, setInfoList] = useState();

    // 컴포넌트가 맨처음 랜더링 되면
    useEffect(() => {
        txt1.current.focus();
    }, []);

    // 확인 버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;

        kw = encodeURI(txt1.current.value);
        // console.log(txt1.current.value, kw);
        let apikey = 'RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D'
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${apikey}`
        url = url + `&numOfRows=10`
        url = url + `&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`
        console.log("url", url)

        fetch(url)
        .then((res) => res.json())
        // .then((data) => console.log("This is data", data))
        // .then((data) => {
        //     console.log("This is data", data)
        //     console.log("data.response.body.items.item", data.response.body.items.item)
        //     setInfoList(data.response.body.items.item)
        // })
        .then((data) => 
            setInfoList(data.response.body.items.item)
        ) 
        .catch((err) => console.log(err))
    }



    const getInfo = () => {

    }


    // 취소 버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    // 데이터 가져오기
    // const getInfo = (seldt) => {
    //     let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`
    //     console.log("url", url)

    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    // };
    // RestAPI의 url 형태: https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1 + ? + 요청 변수 1 + & + 요청 변수 2...
    // serviceKey =
    // numOfRows =
    // pageNo=

    return (
        <main className="container">
            <form> 
                <article>
                    <header className={style.hd}>
                        <h1>한국관광공사 - 관광사진 정보</h1>
                    </header>
                    <div className="grid">
                        <div>
                            {/*  */}
                            <input ref={txt1} type='text' id='txt1' name='txt1' placeholder='키워드를 입력하세요.' onChange={() => getInfo()} required/>
                        </div>
                        <div className={style.btDiv}>
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>
                </article>  
            </form>

            {/* <form className='grid'> */}
                {infoList && <GalleryView info={infoList} />}
                {/* <article>
                    <header>
                        <h1>Place Name</h1>
                    </header>
                    <div>
                        <div></div>
                    </div>
                </article> */}
            {/* </form>   */}
        </main>
    )

}

export default Gallery;