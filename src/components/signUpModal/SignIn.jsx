import { Box, Button, Modal, TextField } from '@mui/material'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../../store/asyncAciton/mainAction';
import { closeModal } from '../../store/slices/authSlice';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SignIn() {
    const [user,setUser]= useState({})
    const handleChange=({target})=>{
        setUser({...user,[target.name]:target.value})
    }
    const handleSend=(e)=>{
      e.preventDefault()
      console.log('send')
      dispatch(signUpAction(user))

    }
    const dispatch = useDispatch()
    const {modal} = useSelector(state=>state.auth)
    // const handleOpen = () => setOpen(true);
    const handleClose = () =>{ dispatch(closeModal())}

  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      <form onSubmit={handleSend} style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between'
      }}>
        <TextField
          id="outlined-basic"
          label="name"
          name="name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="surname"
          name="surname"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="password"
          name="password"
          variant="outlined"
          onChange={handleChange}
        />
        
        <Button onClick={handleSend }>Sign Up</Button>
      </form>
      </Box>
      </Modal>
    </div>
  )
}

export default SignUpModal
