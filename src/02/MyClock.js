import MyClockImage from "./MyClockImage";  // 사용자 정의 태그
import MyClockTime from "./MyClockTime";
import '../01/Hello.css';

// 내가 만든 컨포넌트에 또 컨포넌트가 다시 들어가는 구조
// 세 개의 컨포넌트: MyClock.js
// 만들고 나서 App.js에서 수정
const MyClock = () => {
    return (
        // 절대 class를 사용하지 말 것. 예약어 충돌이 발생할 수 있음.
        <main className="container">
            <article data-theme="dark">
                <MyClockImage />
                {/* 이미지 두 개 사용: 컨포넌를 가져와 쓸 수 있음.*/}
                {/* <MyClockImage /> */}
                <MyClockTime />
            </article>
        </main>
    );
}

export default MyClock;