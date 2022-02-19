import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Two from "./components/second/Two";

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
                <Profile/>
            </div>
            <div>
                <Two />
            </div>
        </div>
    );
}

export default App;