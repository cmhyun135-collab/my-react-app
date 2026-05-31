import './InfoCard.css';

function InfoCard({ icon, title, description, badgeText, badgeColor }) {
  return (
    <div className="info-card">
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        {badgeText && (
          <span 
            className="card-badge" 
            style={{ backgroundColor: badgeColor || '#3498db' }}
          >
            {badgeText}
          </span>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
