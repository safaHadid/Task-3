import './FeaturedItem.css'

const FeatureItem = ({ icon, title, description }) => {
    return (
      <div className="feature-item">
        <img src={icon} alt={title} className="feature-icon" />
        <div className="feature-info">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
        </div>
      </div>
    );
  };

  export default FeatureItem;