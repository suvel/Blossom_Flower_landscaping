import PageHeader from '../layout/PageHeader.jsx';
import ServiceGrid from '../components/service/ServiceGrid.jsx';
import { services } from '../data/services.js';

export default function ServicePage() {
  return (
    <>
      <PageHeader title="Services" />
      <ServiceGrid services={services} />
    </>
  );
}
