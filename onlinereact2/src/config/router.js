import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import Navbar from "../components/navbar";
import News from "../components/news";
import LoadingBar from 'react-top-loading-bar'

export default function AppRouter() {
    const [progress, setProgress] = useState(0)
    return (
        <Router>
            <Navbar />
            <div>
            <LoadingBar
                color='#f11946'
                progress={progress}
                // onLoaderFinished={() => setProgress(0)}
                height="3"
            /></div>
            <div>

                <Routes>

                    <Route path="/" element={<News setProgress={setProgress}  key={"general"} pageSize="12" category="general" country="in" />} />

                    <Route path="/business" element={<News setProgress={setProgress}  key={"business"} pageSize="12" category="business" country="in" />} />


                    <Route path="/entertainment" element={<News setProgress={setProgress}  key={"entertainment"} pageSize="12" category="entertainment" country="in" />} />

                    <Route path="/health" element={<News setProgress={setProgress}  key={"health"} pageSize="12" category="health" country="in" />} />

                    <Route path="/science" element={<News setProgress={setProgress}  key={"science"} pageSize="12" category="science" country="in" />} />

                    <Route path="/sports" element={<News setProgress={setProgress}  key={"sports"} pageSize="12" category="sports" country="in" />} />

                    <Route path="/technology" element={<News setProgress={setProgress}  key={"technology"} pageSize="12" category="technology" country="in" />} />

                </Routes>
            </div>
        </Router>
    );
}