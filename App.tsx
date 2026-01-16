import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Context } from './pages/Context';
import { Wallachia } from './pages/Wallachia';
import { Moldova } from './pages/Moldova';
import { Transylvania } from './pages/Transylvania';
import { Dobrogea } from './pages/Dobrogea';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/context" element={<Context />} />
          <Route path="/tara-romaneasca" element={<Wallachia />} />
          <Route path="/moldova" element={<Moldova />} />
          <Route path="/transilvania" element={<Transylvania />} />
          <Route path="/dobrogea" element={<Dobrogea />} />
          <Route path="/domnitori" element={<Rulers />} />
          <Route path="/despre" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
