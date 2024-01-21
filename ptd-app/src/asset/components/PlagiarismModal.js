import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PreviewGrid from './PreviewGrid'
import { getPlagiarismProblems, getProblem } from '../../api/GetAPI';
import ProblemDetail from '../../page/problempage/ProblemDetail';

function PlagiarismModal({open, setOpen, pid}) {
    const [problems, setProblems] = useState([]);
    const [content, setContent] = useState(null);

    const boxSx = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%', // 화면의 대부분을 차지
        height: '80%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
    };

    const onPreviewClickHandler =(pid) => {
        getProblem(pid).then((prob) => {
            setContent(<ProblemDetail problem={prob}/>)
        })
    }

    const setGridContent = () => [
        setContent(<PreviewGrid problems={problems} onPreviewClick={onPreviewClickHandler}/>)
    ]

    useEffect(()=>{
        //getPlagiarismProblems(pid).then(data=>setProblems(data));
        setGridContent();
    },[])

    return (
    <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        >
        <Box sx={boxSx}>
            <Typography id="modal-title" variant="h2" component="h2">
            표절 문제
            </Typography>
            <hr style={{ color: 'purple', backgroundColor: 'purple', height: 2 }} />
            {content}
        </Box>
    </Modal>
  );
}

export default PlagiarismModal;
