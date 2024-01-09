import PaymentsOverview from 'components/PaymentsOverview';
import PaymentsTable from 'components/PaymentsTable';

const PaymentsContent = () => (
  <div className="flex-1 bg-[#FAFAFA] px-8 pb-8">
    <PaymentsOverview />
    <PaymentsTable />
  </div>
);

export default PaymentsContent;
