import React, {Suspense} from 'react';
import './App.css';
import {PLYViewer, PLYViewerv2} from './viewer'
import {OrbitControls} from "@react-three/drei";
//import {Html, useProgress} from '@react-three/drei'
import {Canvas,useLoader, useThree} from '@react-three/fiber'


function App() {
  return (
    <div>
      <div style={{position: 'relative'}}>
        <div style={{
                  height: '400px',
                  width: '100%',
                  backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.jpeg'})`,
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center',
                  filter: 'blur(2px)',
                  opacity: 0.9
              }}>

        </div>
        <h1
        style={{position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: "40pt",
          zIndex: 1,
          color: 'rgb(247, 241, 242)'}}
        
        >Display to Any Device: A Semantic-Preserved Scene Transformation Network for Point Cloud of Large-Scale Scene
        </h1>
      </div>

      <div style={{width: "75%", margin: "auto"}}>
        <div style={{fontSize: "30pt", fontWeight: 'bold', textAlign: 'left', color: "rgb(141, 53, 37)", marginTop: "20px"}}>
          Abstract
        </div>
        <div style={{display: "flex"}}>
          <div style={{width: "50%"}}>
            <img src={process.env.PUBLIC_URL + '/abstract.png'}
              style={{
                width: '95%',  // 宽度设置为父元素宽度的 50%
                height: 'auto' // 高度根据宽度等比例缩放
            }}></img>
          </div>
          <div style={{width: "50%", fontSize: "13pt", textAlign: 'left', marginLeft: "16px"}}>
              We propose a novel method that transforms a large-scale scene point cloud into point sets at different resolutions. Across these resolutions, semantic consistency is preserved. This is achieved by representing the scene using a semantic map, where a set of support points along with their semantic features and semantic logits is distributed in whole space. When a target resolution is given, query points are sampled in space and their semantics are queried from the semantic map. Experiments on 2 indoor scene datasets demonstrate the consistency of our method in multi-resolution semantics and the accuracy of the semantics at high resolutions. Our method also shows some adaptability in outdoor scenes, where the objects in these scenes are not well-defined. Furthermore, we provide new perspective for semantic parsing and model simplification of large-scale scenes, especially outdoor scenes, i.e. semantic maps rather than specific objects in the scene.
          </div>
        </div>

        <div style={{fontSize: "30pt", fontWeight: 'bold', textAlign: 'left', color: "rgb(141, 53, 37)", marginTop: "20px"}}>
          Results
        </div>

        <img src={process.env.PUBLIC_URL + '/test.gif'}
            style={{
              width: '30%',  // 宽度设置为父元素宽度的 50%
              height: 'auto' // 高度根据宽度等比例缩放
          }}
        />

        <div style={{fontSize: "30pt", fontWeight: 'bold', textAlign: 'left', color: "rgb(141, 53, 37)", marginTop: "20px"}}>
          Interactive visualizations
        </div>
        
        <div style={{width: "450px", height: "450px", background: "rgb(226, 226, 226)"}}>
          <Canvas>
            <PLYViewerv2 url={process.env.PUBLIC_URL + '/example.ply'}></PLYViewerv2>
            <OrbitControls enableRotate={true} enableDamping={true} up={[0,0,1]}></OrbitControls>
          </Canvas> 
        </div>
         
        


        
      </div>
      <div className="button-container">
          <button>了解更多</button>
          <button>查看详情</button>
      </div>
    </div>
    
  );
}

export default App;
