import React from 'react';
import ProblemPreview from './ProblemPreview';
import { Grid, Container } from '@mui/material';

const PreviewGrid = ({problems}) => {
    
    const board = <Grid container spacing={2}>
        {Array.from({ length: problems.length }, (_, index) => (
            <ProblemPreview key={index} cardIndex={index} problem={problems[index]}/>
        ))}
    </Grid>

  return (
    <Container style={{ maxHeight: '70vh', maxWidth: '95vw', overflowY: 'auto', paddingBottom: '4em' }}>
      {board}
    </Container>
  );
};


export default PreviewGrid;
