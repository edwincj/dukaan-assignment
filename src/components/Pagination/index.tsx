import { ArrowBlack } from 'assets/Images';
import PageNumber from 'components/Pagination/components/PageNumber';

const Pagination = () => (
  <div className="w-full flex items-center justify-center text-[#4D4D4D] text-sm gap-6 mt-6">
    <div className="flex rounded text-[#4D4D4D] border border-[#D9D9D9] bg-white cursor-pointer gap-[6px] p-[6px] pr-3 font-medium hover:bg-[#F2F2F2] hover:shadow">
      <img
        src={ArrowBlack}
        alt=""
        width={18}
        height={18}
        className="rotate-90"
      />
      <span>Previous</span>
    </div>
    <div className="flex gap-2">
      <PageNumber pageNo={1} />
      <PageNumber pageNo={'...'} />
      <PageNumber pageNo={10} isSelected />
      <PageNumber pageNo={11} />
      <PageNumber pageNo={12} />
      <PageNumber pageNo={13} />
      <PageNumber pageNo={14} />
      <PageNumber pageNo={15} />
      <PageNumber pageNo={16} />
      <PageNumber pageNo={17} />
      <PageNumber pageNo={18} />
    </div>
    <div className="flex rounded text-[#4D4D4D] border border-[#D9D9D9] bg-white cursor-pointer gap-[6px] p-[6px] pl-3 font-medium hover:bg-[#F2F2F2] hover:shadow">
      <span>Next</span>
      <img
        src={ArrowBlack}
        alt=""
        width={18}
        height={18}
        className="rotate-[270deg]"
      />
    </div>
  </div>
);

export default Pagination;
