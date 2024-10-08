import React from 'react';
import './Section8.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

function Section8() {
  return (
    <div className='section8bg'>
      <Container maxWidth="lg">
        <div className='divh1ofsection8'>
            <h1 className='h1ofsection8medask ibrtitle1'>MedAsk</h1>
            <h1 className='subtitle'>Our Head Office</h1>
        </div>
        <div className='firstdivofSection8'>
          <div className='firstSubdivofSection8'>
            <FormControl variant="standard">
              <h5 className='h5ofsection8'>Enter Your Name</h5>
              <TextField
                className='oneTextFieldsection8'
                label="Name"
                id="component-simple"
                variant="outlined"
                sx={{ borderRadius: '10px' }} // Add border radius here
                InputProps={{
                  style: {
                    borderRadius: '10px' // Add border radius to the inner input field
                  }
                }}
              />
            </FormControl>

            {/* Repeat for other fields */}
            <FormControl variant="standard">
              <h5 className='h5ofsection8'>Enter Your Name</h5>
              <TextField
                className='oneTextFieldsection8'
                label="Name"
                id="component-simple"
                variant="outlined"
                sx={{ borderRadius: '10px' }}
                InputProps={{
                  style: {
                    borderRadius: '10px'
                  }
                }}
              />
            </FormControl>
            <FormControl variant="standard">
              <h5 className='h5ofsection8'>Enter Your Name</h5>
              <TextField
                className='oneTextFieldsection8'
                label="Name"
                id="component-simple"
                variant="outlined"
                sx={{ borderRadius: '10px' }}
                InputProps={{
                  style: {
                    borderRadius: '10px'
                  }
                }}
              />
            </FormControl>
            <FormControl variant="standard">
              <h5 className='h5ofsection8'>Enter Your Name</h5>
              <TextField
                className='oneTextFieldsection8'
                label="Name"
                id="component-simple"
                variant="outlined"
                sx={{ borderRadius: '10px' }}
                InputProps={{
                  style: {
                    borderRadius: '10px'
                  }
                }}
              />
            </FormControl>
          </div>
          <div>
            <h1>Section8</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Section8;
