import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box,Button,Container, Typography, Grid, Card, CardContent,makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});


function App() {
  const [notes, setNotes] = useState([]);
  const [showMore, setShowMore]= useState(false);
  const handleButtonClick = () =>{
    setShowMore(!showMore);
  };

  useEffect(() => {
    axios.get('https://api.gyanibooks.com/library/get_dummy_notes')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <Box display="flex" flexDirection="colomn" justifyContent="center" alignItems="center" height="13vh" >

      <Button onClick={handleButtonClick} variant='contained'  align="center" color='secondary' >
      <Typography variant="h4" component="h1" align="center" gutterBottom color="textPrimary">
        Dummy notes
      </Typography>
      
      
      </Button>
      
      
      </Box>
      <Grid container spacing={2} >
        {notes.map(note => (
          <Grid item key={note.id} xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: "aquamarine"}}>
              <CardContent>
                
                <Typography variant="h6" component="h2" >
                  {note.title}
                </Typography>
                
                {showMore && (
                  <Typography variant="body1" component="p" color="textPrimary">
                  {note.category}
                  </Typography>

                )}
                
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
