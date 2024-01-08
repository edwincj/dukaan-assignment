import Navlinks from 'constants/Navlinks';
import AvailableCredits from './components/AvailableCredits';
import NavHeader from './components/NavHeader';

const SideNav = () => {
  return (
    <div className="h-full bg-[#1E2640] text-[#FFFFFF] w-[224px] px-[10px] py-4 flex flex-col">
      <NavHeader />
      <div className="flex-1 mt-6">
        {Navlinks.map((navLink) => (
          <div
            key={navLink.name}
            className={`flex items-center px-4 py-2 gap-3 w-full cursor-pointer ${
              navLink.selected ? 'bg-[#ffffff10] rounded-[4px]' : 'hover:bg-[#ffffff10] hover:rounded-[4px]'
            }`}
          >
            <img src={navLink.icon} alt="" width={20} height={20} />
            <div
              className={`text-sm font-medium ${
                navLink.selected ? '' : 'opacity-80'
              }`}
            >
              {navLink.name}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 w-full flex justify-center">
        <AvailableCredits />
      </div>
    </div>
  );
};

export default SideNav;
