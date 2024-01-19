import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function UploadWaiting() {
    
  return (
    <Box
      sx={{
        position: 'fixed', // 뷰포트에 대해 고정 위치
        top: '50%',        // 상단에서 50% 위치
        left: '50%',       // 왼쪽에서 50% 위치
        transform: 'translate(-50%, -50%)', // 정확한 중앙 위치 조정
        textAlign: 'center' // 텍스트 중앙 정렬
      }}
    >
      <CircularProgress sx={{color: 'purple'}} />
      <Typography variant="h6" sx={{ mt: 2 }}>
        표절 검사를 진행중입니다
      </Typography>
    </Box>
  );
}

export default UploadWaiting;
