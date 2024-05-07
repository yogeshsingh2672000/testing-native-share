import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Jobs from './components/Jobs';
import About from './components/About';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/jobs' element={<Jobs />} />
        <Route exact path='/about' element={<About />} />
        <Route path='/post/:postId' element={<Post />} />
        <Route path='/*' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
