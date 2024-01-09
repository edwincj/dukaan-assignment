import {
  ArrowBlack,
  Download,
  Info,
  Search,
  Sort,
  Triangle,
} from 'assets/Images';
import Pagination from 'components/Pagination';

const PaymentsTable = () => (
  <>
    <div className="text-[#1A181E] font-medium text-[20px] leading-7 mb-5">
      Transactions | This Month
    </div>
    <div className="bg-white p-3 pb-6 w-full rounded-lg shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)]">
      <div className="flex justify-between items-center mb-3 w-full">
        <div className="flex items-center py-[10px] px-4 gap-2 border border-[#D9D9D9] rounded w-[248px]">
          <img src={Search} alt="" width={14} height={14} />
          <input
            type="text"
            placeholder="Search by order id..."
            className="border-none outline-none w-full bg-inherit placeholder-[#999] text-sm"
          />
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-[6px] py-[6px] px-3 border border-[#D9D9D9] rounded cursor-pointer hover:bg-[#F2F2F2] hover:shadow">
            <span>Sort</span>
            <img src={Sort} alt="" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 border border-[#D9D9D9] rounded cursor-pointer hover:bg-[#F2F2F2] hover:shadow">
            <img src={Download} alt="" />
          </div>
        </div>
      </div>
      <table className="w-full text-sm">
        <thead className="w-full font-medium text-[#4D4D4D] rounded bg-[#F2F2F2]">
          <tr className="w-full">
            <th className="py-[10px] text-left pl-3">Order Id</th>
            <th className="py-[10px] text-left">
              <div className="flex justify-start items-center gap-1">
                <span>Order Date</span>
                <img src={Triangle} alt="" />
              </div>
            </th>
            <th className="py-[10px] text-right">Order Amount</th>
            <th className="py-[10px] text-right pr-3">
              <div className="flex justify-end items-center gap-1">
                <span>Transaction Fees</span>
                <img src={Info} alt="" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="w-full text-[#1A181E]">
          {Array.from(Array(20).keys()).map((ele) => (
            <tr key={ele}>
              <td className="py-[14px] text-left pl-3 font-medium text-[#146EB4] border-b border-[#E6E6E6]">
                #281209
              </td>
              <td className="py-[14px] text-left border-b border-[#E6E6E6]">
                7 July, 2023
              </td>
              <td className="py-[14px] text-right border-b border-[#E6E6E6]">
                ₹1,278.23
              </td>
              <td className="py-[14px] text-right pr-3 border-b border-[#E6E6E6]">
                ₹22
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  </>
);

export default PaymentsTable;
