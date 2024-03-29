import './App.css';
import styled from 'styled-components';
import {Menu} from "./components/Menu";
import {Header} from "./layout/header/Header";
import {Hero} from './layout/main/Hero';


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;