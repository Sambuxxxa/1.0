import Header from "./Components/Header/Header";
import './App.css';
import SideBar from "./Components/SideBar/SideBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className={'Head'}>
                    <Header/>
                </div>
                <div className={'SideBar'}>
                    <SideBar/>
                </div>
                <div className={'MainContent'}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
