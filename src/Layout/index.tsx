import SideNav from "components/SideNav";

const Layout = () => {
    return (
        <div className="flex h-[100vh]">
            <SideNav />
            <div className="flex-1 bg-black text-white">
                page
            </div>
        </div>
    )
}

export default Layout;