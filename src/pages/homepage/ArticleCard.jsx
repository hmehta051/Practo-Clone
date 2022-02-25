import './ArticleCard.css';

export const ArticleCard = ({ title, image, sub, category }) => {
    return <div className="article-card">
        <div className="article-card-image-container">
            <img src={image} alt={title} />
        </div>
        <div className="article-card-info">
            <div className="article-card-category">{category}</div>
            <div className="article-card-title">{title}</div>
            <div className="article-card-sub">{sub}</div>
        </div>
    </div>
}