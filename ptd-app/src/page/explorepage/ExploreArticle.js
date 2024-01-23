import './ExploreArticle.css';
import PreviewGrid from '../../asset/components/PreviewGrid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategoryProblems } from '../../api/GetAPI';


function ExploreArticle() {
    const refreshSwitch = useSelector(state=>state.data.refreshSwitch)
    const category = useSelector(state=>state.data.category)
    const navigate = useNavigate();
    const [problems, setProblems] = useState(null)

    const onPreviewClickHandler = (pid) => {
        navigate('problem/'+pid);
    }

    useEffect(()=>{
        getCategoryProblems(category).then(response=>{setProblems(response)});
    },[refreshSwitch])

    if(!problems) return;
    return(
        <article>
            <PreviewGrid problems = {problems} onPreviewClick={onPreviewClickHandler}/>
        </article>
    );
  }


export default ExploreArticle;