import './App.css'
import { useState } from 'react';
function App() {
  return (
    <div className="emoji-container">
        <div className='title'>I'm creating this emoji project. I hope you will enjoy this 🤪</div>

        <div className='emoji-display'>
              💕
        </div>
        
        <div className='emoji-list'>
          <div className='emoji'>😍</div>
          <div className='emoji'>🎁</div>
          <div className='emoji'>🤑</div>
          <div className='emoji'>🤡</div>
        </div>

        
    </div>
  );
}

export default App;
