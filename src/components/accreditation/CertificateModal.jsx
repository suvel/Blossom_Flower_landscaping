export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <div id="model-body-div">
                <div id="imageContainer" className="d-flex justify-content-center align-items-center py-4">
                  <img id="certificateImage" className="img-fluid" src={certificate.image} alt={certificate.alt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose} />
    </>
  );
}
