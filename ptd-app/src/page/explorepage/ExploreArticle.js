import './ExploreArticle.css';
import ProblemPreview from '../../asset/components/ProblemPreview';
import pro_1 from "../../asset/components/image/pro_1.PNG";
import pro_2 from "../../asset/components/image/pro_2.PNG";
import pro_3 from "../../asset/components/image/pro_3.PNG";
import pro_4 from "../../asset/components/image/pro_4.PNG";
import pro_5 from "../../asset/components/image/pro_5.PNG";
import pro_6 from "../../asset/components/image/pro_6.PNG";
import pro_7 from "../../asset/components/image/pro_7.PNG";
import pro_8 from "../../asset/components/image/pro_8.PNG";
import pro_9 from "../../asset/components/image/pro_9.PNG";
import pro_10 from "../../asset/components/image/pro_10.PNG";

function ProblemList() {

    const problems = [
        { id: 1, to: '/problem', imageSrc: pro_1, altText: 'prob' },
        { id: 2, to: '/problem', imageSrc: pro_2, altText: 'prob' },
        { id: 3, to: '/problem', imageSrc: pro_3, altText: 'prob' },
        { id: 4, to: '/problem', imageSrc: pro_4, altText: 'prob' },
        { id: 5, to: '/problem', imageSrc: pro_5, altText: 'prob' },
        { id: 6, to: '/problem', imageSrc: pro_6, altText: 'prob' },
        { id: 7, to: '/problem', imageSrc: pro_7, altText: 'prob' },
        { id: 8, to: '/problem', imageSrc: pro_8, altText: 'prob' },
        { id: 9, to: '/problem', imageSrc: pro_9, altText: 'prob' },
        { id: 10, to: '/problem', imageSrc: pro_10, altText: 'prob' },
    ];

    return(
        <div class="wrapper">
            {problems.map((problem) => (
                <ProblemPreview
                key={problem.id}
                to={problem.to}
                imageSrc={problem.imageSrc}
                altText={problem.altText}
                />
            ))}
        </div>
    );
  }
  
    


function ExploreArticle() {

    return (
        <article>
            <ProblemList></ProblemList> <br/>
        </article>
    )
}

export default ExploreArticle;