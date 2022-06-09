import Header from "./Components/Header/Header";
import './App.css';
import SideBar from "./Components/SideBar/SideBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";




function App() {
    return (
        <div className="wrapper">
            <div className={'Head'}>
                <Header/>
            </div>
            <div className={'SideBar'}>
                <SideBar/>
            </div>
            <div className={'MainContent'}>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
