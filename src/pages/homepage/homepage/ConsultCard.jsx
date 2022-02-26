import './ConsultCard.css'

export const ConsultCard = ({ image, title, link }) => {
    return <div className="consult-card">
        <div className="consult-card-img-container">
            <img src={image} alt={title} />
        </div>
        <div className="consult-card-title">{title}</div>
        <div className="consult-card-consultnow">CONSULT NOW</div>
    </div>
}