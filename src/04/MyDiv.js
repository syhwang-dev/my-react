import MyDivArticle from "./MyDivArticle";
// import './MyDiv.css';

const MyDiv = () => {

    return (
        <main className="container">
            {/* <article>
                <h1 className="mah1">MyDiv</h1>
                <ul>
                    <li>MyDiv</li>
                    <li>MyDiv</li>
                </ul>
            </article> */}
            
            {/* <h1>MyDiv</h1> */}

            {/* 컴포넌트 합성 */}
            {/* <MyDivArticle aname='MyDiv0'/> aname='MyDiv0'가 없다면 어떻게 처리할까? */}
            <MyDivArticle />
            <MyDivArticle aname='MyDiv1'/>
            <MyDivArticle aname='MyDiv2'/>
        </main>

    );
}

export default MyDiv;