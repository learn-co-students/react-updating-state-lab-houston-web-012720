import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeDebugger from './components/YouTubeDebugger'
import DigitalClicker from './components/DigitalClicker'


ReactDOM.render(
  <div>
    <DigitalClicker />
    <YouTubeDebugger />
  </div>,
  document.getElementById('global')
);
