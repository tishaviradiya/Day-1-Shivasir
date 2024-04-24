
const CardPage=({name,image,price})=>{
    return<>
    <div className="Card">
        <a href="#"><img src={image} alt="fruit_image" style={{width:'200px'}}/></a>
        <h3>{name}</h3>
        <h5>{price}</h5>
        </div>
    </>

}
export default CardPage