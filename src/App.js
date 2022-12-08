import './App.css'
import { useState } from 'react';
function App() {
  const [emoji, setemoji] = useState("😍")
  return (
    <div className="emoji-container">
        <div className='title'>I'm creating this emoji project. I hope you will enjoy this 🤪</div>

        <div className='emoji-display'>
              {emoji}
        </div>
        
        <div className='emoji-list'>
          <div className='emojii' onClick={()=>{setemoji('😍')}}>😍</div>
          <div className='emojii' onClick={()=>{setemoji('🎁')}}>🎁</div>
          <div className='emojii' onClick={()=>{setemoji('🤑')}}>🤑</div>
          <div className='emojii' onClick={()=>{setemoji('🤡')}}>🤡</div>
        </div>

        
    </div>
  );
}

export default App;
