import React from 'react';
import axios from 'axios';
import PetsIcon from '@mui/icons-material/Pets';
import './App.css';

function App() {
  const [dogInfo, setDogInfo] = React.useState<{[ key: string]: string }>({});
  React.useEffect(() => {
    const url = 'https://random.dog/woof.json';
    axios.get(url).then((response) => {
      setDogInfo(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h2><PetsIcon/>Today's Dog<PetsIcon/></h2>
      <img src={dogInfo.url}  alt="読み込み中" width="480" height="640" />
    </div>
  );
}

export default App;
