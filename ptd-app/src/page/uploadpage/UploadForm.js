import CategorySelector from '../../asset/components/CategorySelector';
import NextCancelButton from '../../asset/components/NextCancelButton';
import './UploadForm.css'

function UploadForm(props) {

    return (
    <>
    <h1 class="uploadTitle">문제 업로드</h1>
    <form onSubmit={props.submit} onReset={props.reset}>
    <fieldset id="uploadForm">
        <div class="purplerec"></div>
            <table id="uploadProblem">
                <tr>
                    <td class="co1"><label htmlFor="category">카테고리</label></td>
                    <td class="co2" className="catselect"><CategorySelector/></td>
                </tr>
                <tr>
                    <td class="co1" htmlFor="problemUpload">문제</td>
                    <td class="co2"> <input type="file" name="problemImage" accept="image/*"></input></td>
                </tr>
                <tr>
                    <td class="co1" htmlFor="explanationUpload">해설</td>
                    <td class="co2"><input type="file" name="solutionImage" accept="image/*"></input></td>
                </tr>
                <tr>
                    <td class="co1" htmlFor="difficulty">난이도</td>
                    <td class="co2">
                    <select id="diff" name="diff">
                        <option value="1">1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <td class="co1" htmlFor="Price">가격</td>
                    <td class="co2"><input type="number" id="Priceinput" name="price"></input></td>
                </tr>
            </table>
        </fieldset>
        <div><NextCancelButton submitText={'업로드하기'}></NextCancelButton></div>
    </form>
    </>
    )
}

export default UploadForm