const reasons = [
  { id: 'excellence', icon: 'fa-star', title: 'Excellence guaranteed' },
  { id: 'customer-focused', icon: 'fa-handshake', title: 'Customer-focused' },
];

export default function WhyChooseUs() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 animated fadeInUp">
            <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
            <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
            <p className="mb-4">
              Blossom Flowers Landscaping stands out for its turnkey landscaping solutions, driven by a team of
              seasoned construction professionals with extensive field experience. With a commitment to quality
              from conception to completion, the company ensures timely project delivery and client satisfaction.
              Specializing in diverse disciplines such as Hard &amp; Soft Landscaping, Irrigation Design &amp;
              Execution, Swimming Pool &amp; Water features, Pergolas &amp; Shade Structures, and Landscape Lighting
              Works, Blossom Flowers Landscaping offers comprehensive services. Their expertise, track record in
              prestigious UAE projects, and dedication to continuous improvement make them a compelling choice for
              landscaping needs, promising a mutually beneficial and enduring partnership.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="row g-4">
                  {reasons.map((reason) => (
                    <div key={reason.id} className="col-12 animated fadeIn">
                      <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                        <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 90, height: 90 }}>
                          <i className={`fa ${reason.icon} fa-3x text-primary`} />
                        </div>
                        <h4 className="mb-0">{reason.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6 animated fadeIn">
                <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 90, height: 90 }}>
                    <i className="fa fa-tools fa-3x text-primary" />
                  </div>
                  <h4 className="mb-0">Personal Protective Equipment (PPE)</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
