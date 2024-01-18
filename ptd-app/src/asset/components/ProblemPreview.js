import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';

function ProblemPreview(props) {

    const click = () => {
        console.log("click");
    }

    return(
        <Grid item md={4} key={props.cardIndex}>
        <Card onClick={click}>
            <CardActionArea>
            <CardContent>
                <Typography variant="h5" component="div">
                <img src={props.problem.image} style={{ width: '100%', height: 'auto' }} alt="Card Image"/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.problem.id}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    )
}

export default ProblemPreview;