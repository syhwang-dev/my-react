// json 데이터 가져오기
import data from './dataFrcst.json'

const Frcst = () => {
    // 이곳은 함수의 body 부분

    // import 한 json의 값을 콘솔에서 확인해보기
    // console.log(data);

    // Key 순서대로 출력하기 - 날짜에 대해
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];

    dtKey.map((item) => console.log(data[item]))
    

    return (
        // return 안: 이곳은 날라가는(?) 부분
        // console.log(data); 의 값을 확인할 수 없음.
        <>

        </>
    );
}

export default Frcst