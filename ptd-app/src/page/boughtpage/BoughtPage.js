import './BoughtPage.css';
import "../../asset/components/background.css"
import HeaderBar from '../../asset/components/HeaderBar';
import BackButton from '../../asset/components/BackButton';
import DetailButton from '../../asset/components/DetailButton';
import { Link } from 'react-router-dom';

function BoughtPage () {
    return(
        <>
        
        <HeaderBar/>
        <Link to="/mypage"><BackButton/></Link>
        <div className="backGround"></div>

        <div class="rectangle">
            
            <div class="purplerec"></div>
            <div class="plist">구매목록</div>
            <div class="smallrec"></div>
        
        <table class="table">
            <tr>  
            <td class="font">문제번호</td>
	        <td class="font">날짜</td>
	        <td class="font">금액</td>
            <td class="font">자세히</td>
            </tr>

            <tr class="row1">
            <td class="col1">#1325</td>
            <td class="col2">2024-01-01</td>
            <td class="col3">10ETH</td>
            <td class="col4"><DetailButton/></td>
            </tr>

            <tr>
            <td class="font1">#1326</td>
            <td class="font1">2024-01-02</td>
            <td class="font1">20ETH</td>
            <td class="font1"><DetailButton/></td>
            </tr>

            <tr class="row1">
            <td class="col1">#1326</td>
            <td class="col2">2024-01-03</td>
            <td class="col3">30ETH</td>
            <td class="col4"><DetailButton/></td>
            </tr>
        </table>
        {/* <div class="inforec"></div> */}
        </div>
        </>
    )
}

export default BoughtPage;