import { ArrowBlack, Download, Search, Sort } from 'assets/Images';

const PaymentsContent = () => (
  <div className="flex-1 bg-[#FAFAFA] px-8">
    <div className="flex items-center justify-between mb-6 mt-8">
      <span className="font-medium text-xl text-[#1A181E]">Overview</span>
      <div className="flex items-center justify-center gap-[7px] h-9 w-[137px] rounded-[4px] text-[#4D4D4D] border border-[#D9D9D9] bg-white">
        <span>Last Month</span>
        <img src={ArrowBlack} alt="" />
      </div>
    </div>
    <div className="flex gap-5 mb-5">
      <div className="flex-1 p-5 bg-white rounded-[8px] shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)]">
        <div className="text-[#4D4D4D] mb-4">Online Orders</div>
        <div className="font-medium text-[#1A181E] text-[32px]">231</div>
      </div>
      <div className="flex-1 p-5 bg-white rounded-[8px] shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)]">
        <div className="text-[#4D4D4D] mb-4">Amount Received</div>
        <div className="font-medium text-[#1A181E] text-[32px]">
          ₹23,92,312.19
        </div>
      </div>
    </div>
    <div className="text-[#1A181E] font-medium text-[20px] leading-7 mb-5">
      Transactions | This Month
    </div>
    <div className="bg-white p-3 pb-6 w-full rounded-[8px]">
      <div className="flex justify-between items-center mb-3 w-full">
        <div className="flex items-center py-[10px] px-4 gap-2 border border-[#D9D9D9] rounded-[4px] w-[248px]">
          <img src={Search} alt="" width={14} height={14} />
          <input
            type="text"
            placeholder="Search by order id..."
            className="border-none outline-none w-full bg-inherit placeholder-[#999] text-sm"
          />
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-[6px] py-[6px] px-3 border border-[#D9D9D9] rounded-[4px] cursor-pointer">
            <span>Sort</span>
            <img src={Sort} alt="" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 border border-[#D9D9D9] rounded-[4px] cursor-pointer">
            <img src={Download} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PaymentsContent;
