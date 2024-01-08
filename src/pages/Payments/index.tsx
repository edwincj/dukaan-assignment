import PaymentsContent from 'components/PaymentsContent';
import PaymentsHeader from 'components/PaymentsHeader';

const Payments = () => (
  <div className="flex-1 flex flex-col">
    <PaymentsHeader />
    <PaymentsContent />
  </div>
);

export default Payments;
