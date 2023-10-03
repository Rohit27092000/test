import React ,{useState, useEffect} from 'react'

function TeskForm(props) {
    const [tesk, setTesk] = useState("Rohit")

    const upTesk =()=>{
      console.log("To Upper Case");
      let up = tesk.toUpperCase();
      setTesk(up);
    }
    const LoTesk =()=>{
      console.log("Lower Case");
      let up = tesk.toLowerCase();
      setTesk(up);
    }
    useEffect(() => {
      // console.log(tesk);
      },[tesk])
    
    const tark1 = (event)=>{
      setTesk(event.target.value);
    }
    return (
        <>
         <div className='container ' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Hello</h1>
      <textarea className='form-control' value={tesk} rows="8" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#474e51':'white'}} onChange={tark1}></textarea><br />
      <button type='submit' className="btn btn-primary mx-2"  onClick={upTesk} >Upper Case</button>
      <button type='submit' className="btn btn-primary mx-2"  onClick={LoTesk}>Lower Case</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Text Summary</h1>
    <p>{tesk.split(" ").length} and {tesk.length}</p>
    <h2>Preview</h2>
    <p>{tesk}</p>
    </div>
        </>
    )
}

export default TeskForm
