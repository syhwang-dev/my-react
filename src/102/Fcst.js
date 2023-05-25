// 초단기와 단기를 사용하는 코드로 변경 - 일부 코드만 변경하면 됨.
// 쪼개기

import UltraFcst from './UltraFcst.js'
import VilageFcst from './VilageFcst.js'

const Fcst = () => {
    return (
        <>
            {/* 라우트를 사용하지 않으면 둘 다 화면에 출력됨. */}
            <UltraFcst />
            <VilageFcst />
        </>
    )
}

export default Fcst;