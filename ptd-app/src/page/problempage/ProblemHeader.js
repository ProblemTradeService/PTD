import BackButton from '../../asset/components/BackButton';
import HeaderBar from '../../asset/components/HeaderBar';
import { Link } from 'react-router-dom';

function ProblemHeader() {

    return (
        <div>
            <HeaderBar/>
            <Link to="/explore"><BackButton/></Link>
        </div>
    )
}

export default ProblemHeader;