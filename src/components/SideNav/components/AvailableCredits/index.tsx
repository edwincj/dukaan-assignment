import { Wallet } from 'assets/Images';

const AvailableCredits = () => (
  <div className="flex w-[192px] py-[6px] px-3 bg-[#353C53] items-center gap-3">
    <div className="flex items-center justify-center rounded bg-[#ffffff10] p-[6px]">
      <img src={Wallet} alt="" />
    </div>
    <div className="text-white">
      <div className="opacity-80 text-[13px]">Available Credits</div>
      <div className="font-medium">222.10</div>
    </div>
  </div>
);

export default AvailableCredits;
