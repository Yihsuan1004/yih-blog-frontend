import Header from "../components/Layout/Header";
import { Outlet } from 'react-router-dom';

const RootLayout = props =>{
    return <div className="overflow-x-hidden">
        <Header />
        <Outlet />
    </div>
}

export default RootLayout;