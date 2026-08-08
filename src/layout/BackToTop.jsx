import useScrollPosition from '../hooks/useScrollPosition.js';

export default function BackToTop() {
  const visible = useScrollPosition(300);

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      style={{ display: visible ? 'inline-flex' : 'none' }}
    >
      <i className="bi bi-arrow-up" />
    </a>
  );
}
