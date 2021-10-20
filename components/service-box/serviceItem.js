import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ServiceItem({ icon, title, description }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="single-service">
        <FontAwesomeIcon
          icon={icon}
          color="#ffffff"
          size="4x"
        ></FontAwesomeIcon>
        <h6 className="service-title">{title}</h6>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
}
