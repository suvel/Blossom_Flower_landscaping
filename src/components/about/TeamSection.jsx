import InfoCard from '../common/InfoCard.jsx';
import { teamMembers } from '../../data/team.js';

export default function TeamSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto animated fadeInUp" style={{ maxWidth: 500 }}>
          <p className="fs-5 fw-bold text-primary ">Our Team</p>
          <h1 className="display-5 mb-5">Dedicated &amp; Experienced Team Members</h1>
        </div>
        <div className="row g-5" style={{ justifyContent: 'center' }}>
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-5 col-md-6 animated fadeInUp">
              <InfoCard image={member.image} icon={member.icon} title={member.name} description={member.role} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
