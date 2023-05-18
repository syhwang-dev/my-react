// RouteMain 컴포넌트의 역할: 라우팅 정보 넣기

// Step01. import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Step02. 만든 컴포넌트 import
import RouteNav from "./RouteNav";
import RouteHome from "./RouteHome";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";

const RouteMain = () => {

    return(
        // Step03. BrowserRouter 넣기
        <BrowserRouter>
        <main className="container">
        {/* Step04. */}
            <RouteNav />
            <Routes>
                {/* '/' → localhost:3000 의미 */}
                <Route path='/' element={<RouteHome />} />
                {/* :item 넘기기 */}
                <Route path='/page1/:item/:item2' element={<RoutePage1 />} />
                <Route path='/page2' element={<RoutePage2 />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}

export default RouteMain;

// 라우팅을 사용하면 a태그 못 씀