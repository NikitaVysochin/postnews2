import { Box, Modal } from "@mui/material";
import EditForm from "../Components/EditForm/EditForm"; 
import "./Modal.scss";

export const EditModal = ({ open, id, handleClose    }) => {
  return (
    <Modal onClose={handleClose} open={open}>
      <Box className="box"> 
          <EditForm id={id}
            handleClose={handleClose}
          /> 
      </Box>
    </Modal>
  );
};
