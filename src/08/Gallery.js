/*
한국관광공사: https://www.data.go.kr/iim/api/selectAPIAcountView.do
*/
import { useState, useEffect, useRef } from 'react';
import style from './Gallery.module.css'
const Gallery = () => {
    // 키워드 input
    const txt1 = useRef();

    // 컴포넌트가 맨처음 랜더링 되면
    useEffect(() => {
        txt1.current.focus();
    }, []);

    // 확인 버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;

        let kw = encodeURI(txt1.current.value); 

    }

    // 취소 버튼
    const showClear = (e) => {
    
    }

    return (
        <main className="container">
            <form> 
                <article>
                    <header>
                        <h1>한국관광공사 - 관광사진 정보</h1>
                    </header>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type='text' id='txt1' name='txt1' placeholder='검색어를' required/>
                        </div>
                    </div>
                    <div className={style.btDiv}>
                    <button onClick={() => show(e)}>확인</button>
                    <button onClick={() => showClear(e)}>취소</button>
                    </div>
                </article>  
            </form>
        </main>
    )

}

export default Gallery;