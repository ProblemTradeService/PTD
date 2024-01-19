import './BoughtPage.css';
import "../../asset/components/background.css"

function BoughtPage () {
    return(
        <div className="backGround">

        <div class="rectangle">
            
            <div class="purplerec"></div>
        </div>
        <div class="plist">구매목록</div>
        <div class="smallrec"></div>
        
        <table class="table">
            <tr>  
            <td>문제번호</td>
	        <td>날짜</td>
	        <td>금액</td>
            </tr>

            <tr class="row1">
            <td class="col1">#1325</td>
            <td class="col2">2024-01-01</td>
            <td class="col3">10ETH</td>
            </tr>

            <tr>
            <td >#1326</td>
            <td>2024-01-02</td>
            <td>20ETH</td>
            </tr>

            <tr class="row1">
            <td class="col1">#1326</td>
            <td class="col2">2024-01-03</td>
            <td class="col3">30ETH</td>
            </tr>
        </table>
        {/* <div class="inforec"></div> */}
        
        </div>
    )
}

export default BoughtPage;