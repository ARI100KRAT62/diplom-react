export const Card = ({ id, title, about, price, img }) => {
    return (
        <div className="grid_1_of_5 images_1_of_5">
            <img src={"/images/" + img + ".jpg"} />
            <h3>{title}</h3>
            <p>{about}</p>
            <h4>{price}</h4>
            <div className="button"><span><a href={`/info/${id}`}>Информация</a></span></div>
        </div>
    )
}