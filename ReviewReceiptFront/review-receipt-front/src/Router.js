import App from './App';
import Home from './pages/Home';
import ReviewDetail from './pages/ReviewDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter= ( ) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>  

                    <Route path="/" element={<Home />}/>
                    <Route path="/review/:rvid" element={<ReviewDetail />}/>
                    {/* <Route path="home" element={<Home />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="mypage" element={<MyPage />}/>
                    <Route path="planet/:planetId" element={<PlanetDetail />} /> 
                    <Route path="planet/purchase" element={<PlanetPurchase />} />  */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;