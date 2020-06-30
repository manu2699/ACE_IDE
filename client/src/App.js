import React, { useState } from 'react';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/theme-github'
import "ace-builds/src-noconflict/mode-text";
import axios from "axios";

const App = () => {
  const [code, setcode] = useState("")
  const [input, setinput] = useState("")
  const [lang, setlang] = useState("c_cpp")
  const [output, setoutput] = useState("\n1. Choose Your language, \n2. Code also give inputs if required. \n3. click on run to generate output")

  let compile = () => {
    axios.post('/api/compile-run', { code, lang, input }).then(resp => {
      setoutput(resp.data.stdout)
      console.log(resp.data)
      if (resp.data.stderr != "") {
        setoutput(resp.data.stderr)
      }
    }).catch(err => {
      setoutput(err.stderr)
      console.log(err)
    })
  }
  return (
    <center>
      <div className="editor">
        <h3>ACE_IDE</h3>
        <AceEditor
          mode={lang}
          theme="github"
          name="Editor"
          width="90vw"
          height="50vh"
          showPrintMargin={false}
          onChange={e => setcode(e)}
        />
        <button onClick={() => {
          compile()
        }}>
          Run
        </button>
      </div>
      <div className="sideLayout">
        <div>
          <h3>Input</h3>
          <AceEditor
            name="input"
            mode="text"
            theme="github"
            height="30vh"
            onChange={e => setinput(e)}
          />
        </div>
        <div>
          <h3>Output</h3>
          <AceEditor
            name="output"
            value={output}
            mode="text"
            theme="github"
            height="30vh"
            readOnly={true}
          />
        </div>
      </div>
    </center>
  )
}
export default App;
