import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Statistics from "./Statistics";

const AllSideBarPages = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/statistics" element={<Statistics />} />

            </Routes>
        </div>
    );
};

export default AllSideBarPages;