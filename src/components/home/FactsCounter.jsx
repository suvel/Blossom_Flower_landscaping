import useCountUp from '../../hooks/useCountUp.js';

function Fact({ value, label }) {
  const [count, ref] = useCountUp(value);
  return (
    <div className="col-sm-6 col-lg-4 text-center animated fadeIn" ref={ref}>
      <h1 className="display-4 text-white">{count}</h1>
      <span className="fs-5 fw-semi-bold text-light">{label}</span>
    </div>
  );
}

export default function FactsCounter({ facts }) {
  return (
    <div
      className="container-fluid facts my-5 py-5"
      style={{
        backgroundImage: 'url(/asserts/img/stats_parallax_cover.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          {facts.map((fact) => (
            <Fact key={fact.id} value={fact.value} label={fact.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
