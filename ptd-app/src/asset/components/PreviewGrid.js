import React from 'react';
import ProblemPreview from './ProblemPreview';
import { Grid, Container } from '@mui/material';

const PreviewGrid = (props) => {
    
    const board = <Grid container spacing={2}>
        {Array.from({ length: props.problems.length }, (_, index) => (
            <ProblemPreview key={index} cardIndex={index} problem={props.problems[index]}/>
        ))}
    </Grid>

  return (
    <Container style={{ maxHeight: '70vh', maxWidth: '95vw', overflowY: 'auto', paddingBottom: '4em' }}>
      {board}
    </Container>
  );
};


export default PreviewGrid;
