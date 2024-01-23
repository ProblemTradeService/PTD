import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import './ProblemPreview.css'
import DetailButton from './DetailButton';


function ProblemPreview({problem, cardIndex, onPreviewClick}) {

    const click = () => {
        onPreviewClick(problem.id)      
    }

    return(
    <>
    <Grid item md={4} key={cardIndex}>
        <Card onClick={click}>
            <CardActionArea>
            <CardContent>             
                <img src={problem.image} style={{ width: '100%', height: 'auto' }}  alt="Card Image"/>
                난이도: {problem.level}<br/>
                카테고리: #{problem.category} <br/>
                문제번호: #1{problem.id}
                <DetailButton/>
            </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    </>
    )
}

export default ProblemPreview;