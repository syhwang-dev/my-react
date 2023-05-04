const Detail = ({selData}) => {
    console.log("Detail", Object.keys(selData));

    const tagKey = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];
    // const tagKey =["사고건수", "부상신고자수", "경상자수", "중상자수", "사망자수"];

    let tags = tagKey.map((k, idx) =>
        <div key={'k'+idx}>
            <div>{k}</div>
            <div>{selData[k]}</div>
        </div>    
    )
    
    return (
        <div className="grid">
            {tags}
        </div>
    );
}

export default Detail;