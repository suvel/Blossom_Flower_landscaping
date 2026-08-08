const features = [
  { id: 'no-hidden-cost', icon: 'fa-times', title: 'No Hidden Cost', text: 'Transparency is our commitment.' },
  {
    id: 'dedicated-team',
    icon: 'fa-users',
    title: 'Dedicated Team',
    text: 'A collective force committed to turning ideas into reality. ',
  },
  {
    id: 'support-services',
    icon: 'fa-phone',
    title: 'Support Services ',
    text: 'Empowering progress, ensuring customer delight.',
  },
];

export default function TopFeatures() {
  return (
    <div className="container-fluid top-feature py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          {features.map((feature) => (
            <div key={feature.id} className="col-lg-4 animated fadeIn">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: 160 }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className={`fa ${feature.icon} text-primary`} />
                  </div>
                  <div className="ps-3">
                    <h4>{feature.title}</h4>
                    <span>{feature.text}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
