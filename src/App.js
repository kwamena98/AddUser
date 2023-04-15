import './App.css';
import {useState} from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [check,setCheck]=useState("")
  const [inputValuex, setInputValuexs] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  function LoadingSpinner() {
    return (
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
    );
  }
  

  const handleConfirm = async () => {
    setIsLoading(true);
    fetch('https://apissue.onrender.com//add_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: inputValuex, issue: inputValue }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        setIsLoading(false)
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem adding the data:', error);
      });
    // const response = await fetch('https://followmeapi.onrender.com/confirm', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username: inputValue,target:inputValuex })
    // });
    // const data = await response.json();
    // setCheck(data.message);
   
  }

  const renderUser=(
    <div className="card" style={{lineBreak:'auto'}}>
    <div className="card-body">
      <p><b>{inputValue} </b></p>
    </div>
</div>
  )

  return (
    <div className="container">
      {isLoading ? <LoadingSpinner /> : renderUser}
      
      <h1>State Your Issue</h1>
      <div className="form">
      <input
          type="text"
          placeholder="Your Name Please"
          value={inputValuex}
          onChange={(e=>setInputValuexs(e.target.value))}
        />
      </div>
    <br></br>
    <br></br>
    <div className="form">
        <input
        style={{height:50}}
          type="text"
          placeholder="Issue"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
  
      </div>
      <br></br>
      <br></br>
    <div>

      <button className="confirm-btn" onClick={handleConfirm} disabled={isLoading}>
          Confirm
      <i className="fas fa-arrow-right"></i>
      </button>
    </div>




    </div>
  );
}
export default App;
