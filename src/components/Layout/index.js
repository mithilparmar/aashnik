import { Outlet } from 'react-router-dom';
import './index.scss';
import Navbar from '../Navbar';
import Sitemap from '../SiteMap';

const Layout = () => {
  return (
    <div className="layout">
        <Navbar />
        <div className="layout__content">
            <Outlet />
        </div>
        <Sitemap />
    </div>
  );
};

export default Layout;