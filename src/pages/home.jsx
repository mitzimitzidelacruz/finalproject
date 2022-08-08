import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div>
                            Hello
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )

}

export default Home;