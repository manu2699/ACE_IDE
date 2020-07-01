import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github';
import "ace-builds/src-noconflict/mode-text";
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';

import { FaSun, FaRegMoon, FaPlusCircle, FaMinusCircle, FaPlay } from "react-icons/fa"
import axios from "axios";

const IDE = () => {
  const [code, setcode] = useState("")
  const [Theme, setTheme] = useState(true)
  const [input, setinput] = useState("")
  const [lang, setlang] = useState("c_cpp")
  const [fontSize, setfontSize] = useState(14)
  const [output, setoutput] = useState("\n1. Choose language & code your logic, \n2. Give inputs if required. \n3. click on run to generate output")

  useEffect(() => {
    //getting last used config and code
    setcode(localStorage.getItem("code"))
    if (localStorage.getItem("theme") == "true")
      setTheme(true)
    else if (localStorage.getItem("theme") == "false") {
      document.body.classList.toggle('dark')
      setTheme(false)
    }
  }, [])

  const compile = () => {
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

  const toggletheme = () => {
    //to toggle btw dark and light theme
    document.body.classList.toggle('dark')
    localStorage.setItem("theme", !Theme)
    setTheme(!Theme)
  }

  return (
    <div>
      <section id="header">
        <span id="title">ACE {"<IDE />"}</span>

        <select onChange={e => setlang(e.target.value)}>
          <option value="c_cpp">C/C++</option>
          {/* <option value="java">JAVA</option> */}
          <option value="python">Python</option>
        </select>

        <div>
          < FaMinusCircle className="fontSwitch" onClick={() => {
            if (fontSize > 10)
              setfontSize(fontSize - 1)
          }} />
          <b>Font Size: {fontSize}</b>
          <FaPlusCircle className="fontSwitch" onClick={() => {
            if (fontSize <= 24)
              setfontSize(fontSize + 1)
          }} />
        </div>

        {Theme ? <FaRegMoon className="icon" onClick={toggletheme} /> : <FaSun className="icon" id="sun" onClick={toggletheme} />}

      </section>

      <div className="editor">
        <AceEditor
          mode={lang}
          theme={Theme ? "github" : "monokai"}
          name="Editor"
          width="90vw"
          height="50vh"
          value={code}
          fontSize={fontSize}
          showPrintMargin={false}
          onChange={e => {
            localStorage.setItem("code", e)
            setcode(e)
          }}
        />
        <button className="run" onClick={() => {
          compile()
        }}>
          Run{"\t"}
          <FaPlay />
        </button>

      </div>
      <div className="sideLayout">
        <div>
          <h3>Input</h3>
          <AceEditor
            name="input"
            mode="text"
            theme={Theme ? "github" : "monokai"}
            height="30vh"
            showGutter={false}
            fontSize={fontSize}
            showPrintMargin={false}
            onChange={e => setinput(e)}
          />
        </div>
        <div>
          <h3>Output</h3>
          <AceEditor
            name="output"
            value={output}
            mode="text"
            showGutter={false}
            theme={Theme ? "github" : "monokai"}
            height="30vh"
            fontSize={fontSize}
            showPrintMargin={false}
            readOnly={true}
          />
        </div>
      </div>
    </div>
  )
}
export default IDE;
