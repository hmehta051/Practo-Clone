import "./AppoinmentCard.css"

export const AppointmentCard = ({ image, title, sub }) => {
    return <div className="appoinment-card">
        <div className="appoinment-card-image-container">
            <img src={image} alt={title} />
        </div>
        <div className="appoinment-card-info">
            <div className="appoinment-card-title">{title}</div>
            <div className="appoinment-card-sub">{sub}</div>
        </div>
    </div>
}