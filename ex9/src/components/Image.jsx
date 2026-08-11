export default function Image({ url, alt = '' }) {
  if (!url) return <div className="simple-card-image placeholder-image" aria-label="Image placeholder">IMG</div>;
  return <img className="simple-card-image" src={url} alt={alt} />;
}
