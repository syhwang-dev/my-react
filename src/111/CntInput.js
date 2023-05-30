import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CntAtoms } from "./CntAtoms";

const CntInput = () => {
    const [val, setVal] = useRecoilState(CntAtoms);

    const decrease = (e) => {
        e.preventDefault(); 

        if (val-1 < 0) setVal(0);
        else setVal(val-1);
    }

    const increase = (e) => {
        e.preventDefault();
        if (val+1 > 10) setVal(10);
        else setVal(val+1);
    }
    
    return (
        <article>
        <form>
            <div className="grid">
                <div></div>
                <div><button onClick={decrease}>-</button></div>
                <div><input type="text" id="txt1" name="txt1" value={val} readOnly/></div>
                <div><button onClick={increase}>+</button></div>
                <div></div>
            </div>
        </form>
        <footer>
            <Link to='/disp'>출력화면이동</Link>
        </footer>
    </article>
    )
}

export default CntInput;