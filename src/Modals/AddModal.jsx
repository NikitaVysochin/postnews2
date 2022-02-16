import { Box, Modal } from "@mui/material"; 
import Form from "../Components/Form/Form";
import "./Modal.scss";

export const AddModal = ({ open,  handleClose   }) => {
  return (
    <Modal onClose={handleClose} open={open}>
      <Box className="box"> 
          <Form handleClose={handleClose} /> 
      </Box>
    </Modal>
  );
};
