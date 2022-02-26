import './FacilityCard.css'

export const FacilityCard = ({ image, background, title, sub }) => {
    return <div className="facility-card-box">
        <div className="facility-card-image-container" style={{ backgroundColor: `${background}` }}>
            <img src={image} alt={title} />
        </div>
        <div className="facility-card-info">
            <p>{title}</p>
            <p>{sub}</p>
        </div>
    </div>
}