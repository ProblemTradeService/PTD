import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

function ProblemPreview({problem, cardIndex, onPlagModal}) {
    const location = useLocation();
    const pathname = location.pathname;
    const rootPath = pathname.split('/')[1];
    const navigate = useNavigate();

    const click = () => {
        if(!onPlagModal){
            navigate('problem/'+problem.id);
        }         
    }

    return(
    <>
    <Grid item md={4} key={cardIndex}>
        <Card onClick={click}>
            <CardActionArea>
            <CardContent>
                <Typography variant="h5" component="div">
                <img src={problem.image} style={{ width: '100%', height: 'auto' }} alt="Card Image"/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {problem.id}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    </>
    )
}

export default ProblemPreview;