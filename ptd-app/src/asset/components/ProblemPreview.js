import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';

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