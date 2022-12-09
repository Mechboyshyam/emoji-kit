import './App.css'
import { useState } from 'react';
function App() {
  const [emoji, setemoji] = useState("😍")
  const [bgcolor, setbgcolor] = useState("")
  const [emojisize, setemojisize] = useState(20)
  return (
    <div className="emoji-container">
      <div className='title'>I'm creating this emoji project. I hope you will enjoy this 🤪</div>
      <br /> <br/> <br/>
      <div className='d-flex'>

          <div className='flex-1'>
              <div className='emoji-display' style={{backgroundColor:`${bgcolor}`}}>
                   <div className='display' style={{fontSize:`${emojisize}px`}}>
                      {emoji}
                   </div>
              </div>

              <h2>Click any Emojiii you want and see magic🤣</h2>
              <div className='emoji-list'>
                <div className='emojii' onClick={() => { setemoji('😍') }}>😍</div>
                <div className='emojii' onClick={() => { setemoji('🎁') }}>🎁</div>
                <div className='emojii' onClick={() => { setemoji('🤑') }}>🤑</div>
                <div className='emojii' onClick={() => { setemoji('🤡') }}>🤡</div>
              </div>
          </div>

          <div className='flex-2'>
            <h2>Choose background color</h2>
              <div className='clr-list'>
                  <div className='bg-btn clr-green' onClick={()=>{setbgcolor('green')}}>Green</div>
                  <div className='bg-btn clr-yellow' onClick={()=>{setbgcolor('yellow')}}>Yellow</div>
                  <div className='bg-btn clr-purple' onClick={()=>{setbgcolor('purple')}}>Purple</div>
                  <div className='bg-btn clr-orange' onClick={()=>{setbgcolor('orange')}}>Orange</div>
                  <div className='bg-btn clr-pink' onClick={()=>{setbgcolor('pink')}}>Pink</div>            
              </div>

              <div className='Increase-size'>
                    Increase-size<br/>
                <input type= "range" onChange={(e)=>{setemojisize(e.target.value)}} />
              </div>
          </div>

      </div>


    </div>
  );
}

export default App;
