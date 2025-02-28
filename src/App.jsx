import React from 'react';
import './App.css';
function App() {
  return (
    <div>
      <div style={{position: 'relative'}}>
        <div style={{
                  height: '400px',
                  width: '100%',
                  backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.png'})`,
                  backgroundSize: '80% auto',
                  backgroundPosition: 'center',
                  filter: 'blur(5px)'
              }}>

        </div>
        <h1
        style={{position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 1,
          color: 'white'}}
        
        >Display to Any Device: A Semantic-Preserved Scene Transformation Network for Point Cloud of Large-Scale Scene
        </h1>
      </div>

      <div>
        <img src={process.env.PUBLIC_URL + '/test.gif'}
            style={{
              width: '40%',  // 宽度设置为父元素宽度的 50%
              height: 'auto' // 高度根据宽度等比例缩放
          }}
        />
      </div>
      <div className="button-container">
          <button>了解更多</button>
          <button>查看详情</button>
      </div>
    </div>
    
  );
}

export default App;
