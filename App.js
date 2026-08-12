import logo from './logo.svg';
import './App.css';

function App() {

  let post ='강남 우동 맛집';


  return (
    <div className="App">
      <div className="black-nav">
      <h5 style={{color:'violet',fontSize:'16px'}}>
        {post}
      </h5>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
