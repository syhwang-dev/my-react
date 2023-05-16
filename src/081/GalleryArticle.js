import style from './Gallery.module.css'
const GalleryArticle = ({ item }) => {
    // 13. footer Step02. 쉼표 삭제
    let tags = item.galSearchKeyword.split(', ');
    tags = tags.map((i) => <span className={style.tag}>#{i} </span>)

    return (
        // 12. 화면에 값 출력
        <article>
            <header>
                <span><h3>{item.galTitle}</h3></span>
                <span>{item.galPhotographyLocation}</span>
            </header>
            <div>
                <img src={item.galWebImageUrl} />
            </div>
            <footer>
                {/* 13. footer Step01. tags 만들기  */}
                {tags}
            </footer>
        </article>

    )
}

export default GalleryArticle;