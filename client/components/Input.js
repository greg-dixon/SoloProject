import React, { useState, useEffect } from 'react'
// import storedInput from '../../storedInputs'
// import { values } from '../../wordCache'

const Input = () => {
    const [input, setInput] = useState('');

    // useEffect(() => {
    //     storedInput.push(document.getElementById('textBox').value)
    // })
    // onClick={() => setInput(document.getElementById('textBox').value)

    return (
        <div id = 'formDiv'>
            <form>
                <label id = "submitLabel"> Add your own below!</label>
                <br></br><br></br>
                <label><b>Word:</b>  </label> <input type='text' id="wordBox"></input> <br></br><br></br>
                <label><b>Definition:</b>  </label><input type='text' id="definitionBox"></input><br></br><br></br>
                <label><b>Quote:</b>  </label><input type='text' id="quoteBox"></input><br></br><br></br>
                <label><b>Link to Photo:</b>  </label><input type='text' id="photoLinkBox"></input>
                <br></br><br></br>
                <input type='submit' className = "table" id='submitButton' onClick={() => document.getElementById('textBox').value}></input>
            </form>
        </div>
    )
}

export default Input
