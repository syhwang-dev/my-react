// 리액트 컨포넌트의 기본 구조
// JSX 문법이며, 여기서 시작을 함.
// const Hello = () => {
//     return(
//         <div>
//             Hello React!
//         </div>
//     );
// }

// export default Hello;

// import logo from '../logo.svg';
// const Hello = () => {
//     return(
//         <>
//             {/* class가 아닌 className을 써야 함. */}
//             <div class="App-header"> 
//                 <img src={logo} alt='logo'/>
//                 <div>
//                     Hello React!
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Hello;

import logo from '../logo.svg';
import './Hello.css';

const Hello = () => {
    let name = '황선영';
    let git = 'https://github.com/syhwang-dev';

    return(
        <main className='container'>
            <article data-theme="dark"> 
                <div>
                    <img src={logo} className='App-logo' alt='logo'/>
                </div>
                <footer>
                    <hgroup>
                        <h1>{name}</h1>
                        <h2><a href='{git}'>{git}</a></h2>
                    </hgroup>
                    <h1>Hello React!</h1>
                </footer>
            </article>
        </main>
    );
}

export default Hello;
