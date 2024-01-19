import './ExploreArticle.css';
import ProblemPreview from '../../asset/components/ProblemPreview';
import PreviewGrid from '../../asset/components/PreviewGrid';
import pro_1 from "../../asset/image/pro_1.PNG";
import pro_2 from "../../asset/image/pro_2.PNG";
import pro_3 from "../../asset/image/pro_3.PNG";
import pro_4 from "../../asset/image/pro_4.PNG";
import pro_5 from "../../asset/image/pro_5.PNG";
import pro_6 from "../../asset/image/pro_6.PNG";
import pro_7 from "../../asset/image/pro_7.PNG";
import pro_8 from "../../asset/image/pro_8.PNG";
import pro_9 from "../../asset/image/pro_9.PNG";
import pro_10 from "../../asset/image/pro_10.PNG";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCategoryProblems } from '../../api/GetAPI';



function ExploreArticle() {
    const refreshSwitch = useSelector(state=>state.data.refreshSwitch)
    const category = useSelector(state=>state.data.category)
    const [problems, setProblems] = useState(null)

    useEffect(()=>{
        getCategoryProblems(category).then(response=>{setProblems(response)});
    },[refreshSwitch])

    if(!problems) return;
    return(
        <article>
            <PreviewGrid problems = {problems}/>
        </article>
    );
  }


export default ExploreArticle;