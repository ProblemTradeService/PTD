import './ExploreArticle.css';
import PreviewGrid from '../../asset/components/PreviewGrid';
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
            <PreviewGrid problems = {problems} onPlagModal={false}/>
        </article>
    );
  }


export default ExploreArticle;