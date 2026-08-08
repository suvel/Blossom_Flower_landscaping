export default function AboutSummary() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-lg-3 col-md-6 animated fadeInUp">
            <img className="img-fluid rounded" src="/asserts/img/transforming_nature_into_art_cover.jpeg" alt="" />
          </div>
          <div className="col-lg-9 col-md-6 animated fadeInUp">
            <p className="text-primary" style={{ marginBottom: 0 }}>
              Since
            </p>
            <h1 className="display-2 text-primary mb-0 mb-2">2019</h1>
            <h1 className="display-5 mb-5">Transforming nature into art.</h1>
            <p className="mb-5">
              Boldly sculpting the Earth&apos;s embrace, our landscapes echo the poetry of creation, a testament to
              the grandeur of nature&apos;s collaboration with artistry. We don&apos;t just shape landscapes; we
              compose love letters to the earth, etching stories that withstand the test of time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
