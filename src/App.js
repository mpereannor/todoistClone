import React from 'react';
import './App.css';
import { Header } from './components/layouts/Header'
import { Content } from './components/layouts/Content'
export const App = () => (
  <div className='App'>
      <Header/>
      <Content/>
  </div>
)
export default App;
