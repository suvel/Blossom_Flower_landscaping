import PageHeader from '../layout/PageHeader.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import ContactMap from '../components/contact/ContactMap.jsx';

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <ContactForm />
            <ContactMap />
          </div>
        </div>
      </div>
    </>
  );
}
