import React, { useState } from 'react'
import axios from 'axios'


function App() {
  const [file, setFile] = useState()
  const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:3001/upload', formData)
    then( res => {})
    .catch(e)
  }

  return (
    <>
     
     <input type="file" onChange={() => setFile(e.target.files[0])} />
       <div> 
        <button type="button" onClick={upload}>Upload</button>
      </div>
    </>
  )
}

export default App;
