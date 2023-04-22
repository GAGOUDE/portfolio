import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function PortfolioImageModal({ open, handleOpen, handleClose, srcImage, altImage }) {

    return (
        <React.Fragment>
            <Button onClick={handleOpen}></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                style={{ border: 'none' }}
            >
                <Box sx={{ ...style, width: "85%", backgroundColor: 'transparent', position: 'relative' }}>
                    <Box>
                        <img src={srcImage} alt={altImage} />
                    </Box>
                    <Button onClick={handleClose} sx={{ ...style, position: 'absolute', top: "95%", left: "95%", width: 80, height: 80, borderRadius: 50, color: 'red' }}>
                        FERMER
                    </Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default PortfolioImageModal;