import { Chat, DownArrow, How, Search } from 'assets/Images';

const PaymentsHeader = () => (
  <div className="flex px-8 py-3 gap-4 border-b border-[#D9D9D9]">
    <div className="flex-1 flex items-center gap-4">
      <div className="text-[15px]">Payments</div>
      <div className="flex gap-[6px] items-center cursor-pointer">
        <img src={How} alt="" width={14} height={14} />
        <div className="text-xs text-[#4D4D4D]">How it works</div>
      </div>
    </div>
    <div className="flex-1 flex gap-2 items-center py-[9px] px-4 bg-[#F2F2F2] rounded-[6px]">
      <img src={Search} alt="" />
      <input
        type="text"
        placeholder="Search features, tutorials, etc."
        className="border-none outline-none w-full bg-inherit placeholder-[#808080]"
      />
    </div>
    <div className="flex-1 flex items-center justify-end gap-3">
      <img src={Chat} alt="" className="cursor-pointer" />
      <img src={DownArrow} alt="" className="cursor-pointer" />
    </div>
  </div>
);

export default PaymentsHeader;
