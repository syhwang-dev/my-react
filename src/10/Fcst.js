// Fcst: 라우팅 정보 생성
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FcstNav from "./FcstNav";
import FcstMain from "./FcstMain";
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./VilageFcst";

const Fcst = () => {
    return (
        <BrowserRouter>
        <main className="container">
            <FcstNav />
            <Routes>
                {/* path → url 주소 */}
                {/* element → 컴포넌트 */}
                <Route path='/' element={<FcstMain />} />
                <Route path='/ultra' element={<UltraSrtFcst />} />
                <Route path='/vilage' element={<VilageFcst />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}

export default Fcst;