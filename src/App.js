 
import './App.css';
 

  function App(){
    return (
      <div>
        <h1>Welcome to App.js File</h1>
        <button onClick={redirectToLearn}>Go to Learn Page</button>
      </div>
    );
  }

  const redirectToLearn = () => {
    window.location.href = './learn.html'; // or full path if hosted elsewhere
  };

   

export default App;
