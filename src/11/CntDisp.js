// Step09-1. CntDisp 컴포넌트 생성
const CntDisp = ({val}) => {
    return (
    <article>
        <div className="grid">
            <h1>입력값: {val}</h1>
            <h1>입력값 2배: {val*2}</h1>
        </div>
    </article>

    )
}

export default CntDisp;