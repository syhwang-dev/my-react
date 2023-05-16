import GalleryArticle from "./GalleryArticle";

const GalleryView = ({content}) => {
    console.log("GalleryView", content);

    // 9. 값 화면에 출력 Step02. tags 선언
    const tags = [];

    // 8. 한 줄에 2개 씩 위치시키기
    for(let i=0; i<content.length; i=i+2) {
        console.log(i);

        // 9. 값 화면에 출력 Step03. tags 출력
        tags.push(
            <div className="grid" key={'div'+1}>
                {/* 10. 가져오는 값의 짝수 or 홀수 처리 Step01. */}
                {/* <article>
                    <header>{content[i].galTitle}</header>
                </article>
                <article>
                    <header>{content[i+1].galTitle}</header>
                </article> */}
                {/* 위의 방식은 짝수 개 일 때만 가능하고 홀수 개 일 때는 {content[i+1].galTitle}의 i+1에서 에러 발생 */}

                {/* 10. 가져오는 값의 짝수 or 홀수 처리 Step02. 가져오는 값이 홀수일 경우 처리 */}
                {/* <article>
                    <header>{content[i].galTitle}</header>
                </article>
                { (i+1 < content.lengh) && 
                <article>
                    <header>{content[i+1].galTitle}</header>
                </article> } */}

                {/* 11. GalleryArticle 사용하기 */}
                <GalleryArticle item={content[i]} />
                { (i+1 < content.length) &&
                <GalleryArticle item={content[i+1]} /> }
            </div>
        )
    }

    return (
        <>
        {/* 9. 값 화면에 출력 Step01. tags 만들기 */}
        {tags}
        </>
    );
}

export default GalleryView;