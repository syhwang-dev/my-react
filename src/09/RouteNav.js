import {Link} from 'react-router-dom';
const RouteNav = () => {

    return(
        <nav>
            <ul>
                {/* Link는 a태그로 변환됨. to -> href */}
                <li><Link to='/' role='button'>Home</Link></li>
                <li><Link to='/page1/🍎/🍒' role='button'>Page1</Link></li>
                {/* 쿼리스트링 */}
                <li><Link to='/page2?item=🍎&item2=🍒' role='button'>Page2</Link></li>
            </ul>
        </nav>
    )
}

export default RouteNav;