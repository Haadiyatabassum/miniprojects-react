const TestimonialCard = ({ quote, name, avatar }) => (
  <div className="col-md-4 mb-4" >
    <div className="p-4 border rounded shadow-sm h-100 " style={{backgroundColor:"lavender"}}>
      <p>"{quote}"</p>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <img src={avatar} alt={name} className="rounded-circle" width="20" />
        <strong>{name}</strong>
      </div>
    </div>
  </div>
);

export default TestimonialCard;