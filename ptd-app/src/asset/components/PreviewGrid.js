import React from 'react';
import ProblemPreview from './ProblemPreview';
import { Grid, Container } from '@mui/material';

const PreviewGrid = ({problems,onPreviewClick}) => {
    
    const board = <Grid container spacing={2}>
        {Array.from({ length: problems.length }, (_, index) => (
            <ProblemPreview key={index} cardIndex={index} problem={problems[index]} onPreviewClick={onPreviewClick}/>
        ))}
    </Grid>

  return (
    <Container style={{ maxHeight: '70vh', maxWidth: '45vw', overflowY: 'auto', paddingBottom: '4em' }}>
      {board}
    </Container>
  );
};


export default PreviewGrid;
