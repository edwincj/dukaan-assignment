import Navlinks from 'constants/Navlinks';
import AvailableCredits from './components/AvailableCredits';
import { ArrowWhite, StoreLogo } from 'assets/Images';

const SideNav = () => {
  return (
    <div className="h-full bg-[#1E2640] text-[#FFFFFF] w-[224px] px-[10px] py-4 flex flex-col">
      <div className="w-full flex justify-start itemes-center gap-3">
        <img src={StoreLogo} width={39} height={39} alt="" />
        <div>
          <div className="font-medium text-[15px]">Nishyan</div>
          <div>
            <span className="opacity-80 text-[13px] underline cursor-pointer">
              Visit store
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center ml-auto">
          <img
            src={ArrowWhite}
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-1">
        {Navlinks.map((navLink) => (
          <div
            key={navLink.name}
            className={`flex items-center px-4 py-2 gap-3 w-full cursor-pointer ${
              navLink.selected ? 'bg-[#ffffff10] rounded-[4px]' : ''
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
