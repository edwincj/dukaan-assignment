import { ArrowBlack } from 'assets/Images';

const PaymentsOverview = () => (
  <>
    <div className="flex items-center justify-between mb-6 mt-8">
      <span className="font-medium text-xl text-[#1A181E]">Overview</span>
      <div className="flex items-center justify-center gap-[7px] h-9 w-[137px] rounded text-[#4D4D4D] border border-[#D9D9D9] bg-white cursor-pointer hover:bg-[#F2F2F2] hover:shadow">
        <span>Last Month</span>
        <img src={ArrowBlack} alt="" />
      </div>
    </div>
    <div className="flex gap-5 mb-5">
      <div className="flex-1 p-5 bg-white rounded-lg shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)]">
        <div className="text-[#4D4D4D] mb-4">Online Orders</div>
        <div className="font-medium text-[#1A181E] text-[32px]">231</div>
      </div>
      <div className="flex-1 p-5 bg-white rounded-lg shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)]">
        <div className="text-[#4D4D4D] mb-4">Amount Received</div>
        <div className="font-medium text-[#1A181E] text-[32px]">
          ₹23,92,312.19
        </div>
      </div>
    </div>
  </>
);

export default PaymentsOverview;
