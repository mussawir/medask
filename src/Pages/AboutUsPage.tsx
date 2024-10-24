import React from 'react'
import Form from '../components/Form'
import AboutUsSec1 from '../components/AboutUsSec1'
import About1 from '../components/About1'
import About2 from '../components/About2'
import About3 from '../components/About3'
import About4 from '../components/about4'
import Section4 from '../components/Section4'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import mapaboutus from '../images/mapaboutus.png';
import Icon2 from '../images/quote'
import contactaboutusimg from '../images/contactaboutusimg.png';
import about3btn1 from '../images/about3btn1.png'
import about3btn2 from '../images/about3btn2.png'

function AboutUsPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent', // No background color
    boxShadow: 'none', // No shadow
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>

        <AboutUsSec1/>
        <About1/>
        <About2/>
        <Section4 />
        <About3/>
        <About4/>
        <div className='AddressSection'>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{width: '100%'}} className='AddressSection' >
        <Grid size={12} style={{marginBottom: '12px' }}>
          <h1 className='about3h1'>Contact us</h1>
          <h1 className='about3h2'>Get In Touch</h1>
        </Grid>
        <Grid size={1}></Grid>
        <Grid size={{ xs: 12, md: 5 }} spacing={2}>
          <Item>
          <Grid size={6} sx={{ width: '100%', marginTop: '12px' }}>
            <TextField 
              id="outlined-basic" 
              label="Name..." 
              variant="outlined" 
             fullWidth  
             rows={2}
             sx={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',}}
    multiline
  />
</Grid>

           <Grid size={6} sx={{width: '100%', marginTop: '12px', marginBottom: '8px',}}>
            <TextField id="outlined-basic" label="Address..." variant="outlined"  rows={2}   multiline fullWidth sx={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',}} />
           </Grid>
           <Grid>
           <img src={mapaboutus} alt="mapaboutus" style={{marginTop: '12px',  width: '100%' , objectFit: "fill"}} />
           </Grid>
          </Item>
         </Grid>
           <Grid size={{ xs: 12, md: 6 }}>
          <Item>
            <div >
          <img src={contactaboutusimg} style={{maxWidth: '513.42px', maxHeight:'590.38px' , width: '100%' , height: '100%'  , objectFit: "fill"}} alt="" />
          <div className="about4btn2">
                        <img src={about3btn1} alt="" />
                        <img src={about3btn2} alt="" />
                    </div>
          </div>
          </Item>
        </Grid>
      </Grid>
      </Box>
    </div>
        <Form/>
    </div>
  )
}

export default AboutUsPage