const GalleryView = ({info}) => {
    console.log("info", info)

    let infoTag = [];

    // const showInfo = (data) = {
    //     console.log("data")
    //     // <article></article>
    // };

    for (let row of info) {
        infoTag.push(
            <article>
                <header>
                    <h2>{row.galTitle}</h2>
                </header>
                <div>
                    <div>
                        <img src={row.galWebImageUrl}></img>
                        
                    </div>
                </div>
            </article>
        )
    }

    return (
        <form className='grid'>
            {infoTag}
        </form>
        /*
        <form className='grid'>
            {infoTag}
        </form>
        → {infoTag}가 form 태그로 감싸져 있지 않으면,
        caught Error: Objects are not valid as a React child (found: object with keys {infoTag}). If you meant to render a collection of children, use an array instead.
        에러 발생함.
        */
    )
}

export default GalleryView;