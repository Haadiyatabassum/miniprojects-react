const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="col-md-3 mt-4 mb-4">
      <div className="card h-100 shadow-sm" style={{backgroundColor:"lightgoldenrodyellow"}}>
        <img 
          src={icon} 
          alt={title} 
          className="card-img-top " 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
