import PaymentsContent from 'components/PaymentsContent';
import PaymentsHeader from 'components/PaymentsHeader';

const Payments = () => (
  <div className="flex-1 flex flex-col overflow-auto pb-8">
    <PaymentsHeader />
    <PaymentsContent />
  </div>
);

export default Payments;
