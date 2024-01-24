import { Grid, Card, CardActionArea, CardContent, Typography, Container, Divider, Box } from '@mui/material';
import './ProblemPreview.css'


function ProblemPreview({problem, cardIndex, onPreviewClick}) {

    const imgDiv ={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    };

    const click = () => {
        onPreviewClick(problem.id)      
    };

    return(
    <>
    <Grid item md={12} key={cardIndex}>
        <Card onClick={click}>
            <CardActionArea>
            <CardContent>
                <Container fixed style={{height:"30vh"}}>
                <div style={imgDiv}>
                <img src={problem.image} style={{ maxWidth: '100%', maxHeight: '100%' }}  alt="Card Image"/>   
                </div>
                </Container> 
                <Divider sx={{mb:2, mt:2}}/>
                <Typography>표절 수준: {problem.plaglevel}</Typography>
                <Typography>판매자: {problem.owner}</Typography>
                <Typography>가격: {problem.price}원</Typography>
                <Typography>난이도: {problem.level}</Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    </>
    );
}

export default ProblemPreview;