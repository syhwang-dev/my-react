// 초단기와 단기를 사용하는 코드로 변경 - 일부 코드만 변경하면 됨. // 쪼개기

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FcstNav from './FcstNav'
import UltraFcst from './UltraFcst'
import VilageFcst from './VilageFcst'

const Fcst = () => {
    return (
        <BrowserRouter>
        <main className='container'>
            <FcstNav />
            <Routes>
                <Route path=''/>
                {/* <UltraFcst />
                <VilageFcst /> */}
            </Routes>
        </main>
        </BrowserRouter>
    )
}

export default Fcst;