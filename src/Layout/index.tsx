import SideNav from "components/SideNav";
import Payments from "pages/Payments";

const Layout = () => {
    return (
        <div className="flex h-[100vh]">
            <SideNav />
            <Payments />
        </div>
    )
}

export default Layout;