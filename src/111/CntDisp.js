import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { CntAtoms, CntAtomsTwice } from "./CntAtoms";

const CntDisp = () => {
    // const [val, setVal] = useRecoilState(CntAtoms);  // 여기서 setVal를 사용하지 않음.
    const val  = useRecoilValue(CntAtoms);
    const val2 = useRecoilValue(CntAtomsTwice)

    return (
    <article>
        <div className="grid">
            <h1>입력값: {val}</h1>
            {/* <h1>입력값 2배: {val*2}</h1> */}
            <h1>입력값 2배: {val2}</h1>
        </div>
        <footer>
            <Link to='/'>입력화면이동</Link>
        </footer>
    </article>

    )
}

export default CntDisp;