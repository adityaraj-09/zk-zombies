import React, { useState } from 'react'
import CodeEditor from './codeEditor'
import "./playground.css"
const Playground = () => {
  const [code, setCode] = useState('');
  const [code2,setcode2]=useState('')
  return (
    <>  
         <div className="box-btns">
                <select name="operations" id="operations">
                    <option value="Addition">Addition</option>
                    <option value="Addition">Advice Provider</option>
                    <option value="Addition">catalan</option>
                    <option value="Addition">collatz</option>
                    <option value="Addition">comparison</option>
                    <option value="Addition">conditional</option>
                    <option value="Addition">fibonacci</option>
                </select>
                <div className="btn-run btns-opers"><h3>Run</h3></div>
                <div className="btn-debug btns-opers"><h3>Debug</h3></div>
                <div className="btn-prove btns-opers"><h3>Prove</h3></div>
                <div className="btn-verify btns-opers"><h3>Verify</h3></div>
                <div className="btn-show btns-opers"><h3>Show proof</h3></div>
            </div>
            <div className="con-editors">
              <div className="box-editor">
                <h4>INPUTS</h4>
                <div className="cover-editor">

                <CodeEditor code={code} setCode={(data)=>setCode(data)} theme="dracula" key="1"/>
                </div>
              </div>
              <div className="box-editor">
                <h4>OUTPUTS</h4>
                <div className="cover-editor">

                <CodeEditor code={code2} setCode={(data)=>setcode2(data)} theme="neat" key="2"/>
                </div>
              </div>
            </div>
            
    </>
  )
}

export default Playground