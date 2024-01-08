import { ArrowWhite, StoreLogo } from 'assets/Images';
const NavHeader = () => (
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
);

export default NavHeader;
