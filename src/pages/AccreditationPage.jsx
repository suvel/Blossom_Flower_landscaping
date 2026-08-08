import PageHeader from '../layout/PageHeader.jsx';
import AccreditationGrid from '../components/accreditation/AccreditationGrid.jsx';
import { accreditations } from '../data/accreditations.js';

export default function AccreditationPage() {
  return (
    <>
      <PageHeader title="Accreditation" />
      <AccreditationGrid accreditations={accreditations} />
    </>
  );
}
