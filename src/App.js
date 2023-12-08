import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import ApiData from './components/ApiData';
import './App.css';

function App() {
  const menuList = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header title="Title" />
          <div className="main-content">
            <SideBar title="SideBar" menuList={menuList} />
            <Content title="Content"></Content>
            <ApiData />
          </div>
          <Footer title="Footer" menuList={menuList} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
