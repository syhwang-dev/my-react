import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import CntDisp from "../111/CntDisp";
import CntInput from "../111/CntInput";

const Cnt = () => {
    return (
        <BrowserRouter>
        <main className="container">
        {/* RecoilRoot 태그 안에 있는 태그들은 값을 서로 공유 */}
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<CntInput/>} />
                <Route path="/disp" element={<CntDisp/>} />
            </Routes>
        </RecoilRoot>
        </main>
        </BrowserRouter>
    );
}

export default Cnt;