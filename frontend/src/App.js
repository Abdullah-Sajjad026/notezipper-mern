import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./componens/Header/Header";
import Footer from "./componens/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyNotes from "./pages/MyNotes/MyNotes";

function App() {
    return (
        <>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" exact element={<LandingPage />} />
                        <Route path="/mynotes" exact element={<MyNotes />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}
export default App;
