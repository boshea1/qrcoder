import './App.css';
import QRCode from 'qrcode';
import { useState, useEffect,useRef} from 'react';


function App() {
  const [data, setData] = useState('')
  const canvasRef = useRef();

    useEffect(() => {
      QRCode.toCanvas(
        canvasRef.current,
        data || " ",
        {width:200},
        (error) => error && console.error(error)
      );
    
  },[data])

  return (
    <div className="App">
      <h1 id='title'>QR Code generator</h1>
      <input  id='text-input'
              type='text'
             value={data}
             placeholder='data to be encoded' onChange={e => setData(e.target.value) }></input>
      <div className='qr-container'>

        <canvas ref={canvasRef}/>
                </div>
    </div>
  );
}

export default App;
