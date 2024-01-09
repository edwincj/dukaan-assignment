type PageNumberProps = {
  pageNo: number | '...';
  isSelected?: boolean;
};
const PageNumber: React.FC<PageNumberProps> = ({
  pageNo,
  isSelected = false,
}) => (
  <div
    className={`flex items-center justify-center rounded cursor-pointer ${
      isSelected && pageNo !== '...'
        ? 'bg-[#146EB4] text-white py-[6px] px-2 w-7 h-7'
        : 'w-7 h-7 hover:bg-[#146EB4] hover:text-white hover:py-[6px] hover:px-2'
    } ${pageNo === '...' && 'pointer-events-none'}`}
  >
    {pageNo}
  </div>
);

export default PageNumber;
