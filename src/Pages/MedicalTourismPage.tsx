import React from 'react'
import Form from '../components/Form'
import { Container } from '@mui/material'
import '../App.css'
function MedicalTourismPage() {
  return (
    <div>
        <Container maxWidth="xl" className='heightofallcontainer' style={{backgroundColor: '#f5f5f5', marginLeft:'0px', marginRight:'0px', maxWidth:'1600px'}}>
        Medical Tourism Page Section One
        </Container>
        <Container maxWidth="xl" className='heightofallcontainer' style={{backgroundColor: 'blue', marginLeft:'0px', marginRight:'0px', maxWidth:'1600px'}}>
        Medical Tourism Page Section TWO
        </Container>
        <Container maxWidth="xl" className='heightofallcontainer' style={{backgroundColor: 'yellow', marginLeft:'0px', marginRight:'0px', maxWidth:'1600px'}}>
        Medical Tourism Page Section Three
        </Container>
        <Container maxWidth="xl" className='heightofallcontainer' style={{backgroundColor: 'red', marginLeft:'0px', marginRight:'0px', maxWidth:'1600px'}}>
        Medical Tourism Page Section Three
        </Container>
        <Container maxWidth="xl" className='heightofallcontainer' style={{backgroundColor: 'orange', marginLeft:'0px', marginRight:'0px', maxWidth:'1600px'}}>
        Medical Tourism Page Section Three
        </Container>
        <Form/>
    </div>
  )
}

export default MedicalTourismPage