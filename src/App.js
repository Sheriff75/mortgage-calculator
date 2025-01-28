import { Paper, Grid2, Card, Box } from "@mui/material";
import Display from "./Components/display";
import First from "./Components/first";
import Result from "./Components/Result";
import { useState } from "react";


function App() {
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(null);


  const handleCalculate = (data) => {
    setResultData(data);
    setShowResult(true);
  };

  return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor: 'hsl(203, 41%, 72%)', height: '100vh', textAlign: 'center',}}>
        <Paper sx={{height: '87.9vh', width: '1100px', marginTop: {xs: '-6rem', md: '0'} }}>
          <Grid2  container columns={{xs: 6, md: 12}}>
            <Grid2 size = {{xs: 6, lg: 6}} >
              <First onCalculate={handleCalculate} /> 
            </Grid2>
            <Grid2 size = {{xs: 6, lg: 6}} sx={{marginTop: {xs: '-2.2rem', md: '0'}}}>
            <Card sx={{
              backgroundColor: 'hsl(202, 55%, 16%)',
              height: '87.9vh',
              borderBottomLeftRadius: '70px'
    }}>
              {showResult ? (
                <Result data={resultData} />
              ) : (
                <Display />
              )}
              </Card>
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
  );
}

export default App;
