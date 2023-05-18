import {Link} from 'react-router-dom';
const FcstNav = () => {
    return (
        <nav>
            <ul>
                {/* <li><Link to='/ultra' role='button'>초단기예보</Link></li> */}
                <li>기상청 단기예보</li>
            </ul>
            <ul>
                <li><Link to='/' role='button'>단기예보홈</Link></li>    
            </ul>     
        </nav>
    )
}

export default FcstNav;