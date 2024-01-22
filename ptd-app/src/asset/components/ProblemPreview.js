import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import './ProblemPreview.css'
import DetailButton from './DetailButton';


function ProblemPreview(props) {

    const click = () => {
        console.log("click");
    }

    return(
        <Grid item md={4} key={props.cardIndex} >
        <Card onClick={click}>
            <CardActionArea>
            <CardContent>
                
                <Typography variant="h5" component="div">
                <img src={props.problem.image} style={{ width: '100%', height: 'auto' }}  alt="Card Image"/>
                </Typography>

                <Typography variant="body2" color="text.first" class="typoStyle">
                난이도: 4<br/>
                카테고리: #수열의 극한 <br/>
                문제번호: #1325
                <DetailButton/>
                </Typography>
            
            </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    )
}

export default ProblemPreview;