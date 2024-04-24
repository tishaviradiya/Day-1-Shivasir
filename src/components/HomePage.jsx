
import CardPage from './CardPage'

const HomePage=()=>{
    let Fruits=[
        {
            name:'Apple',
            image:'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg',
            price: '₹30 each',
        },
        {
            name:'Banana',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuk8jvdqOQSi5C8LPtU92-v5bUYtxR5gRpiMmdVPWiFQ&s',
            price: '₹15 per dozen',
        },
        {
            name:'Orange',
            image:'https://image.shutterstock.com/image-photo/orange-cut-half-green-leaves-260nw-1927497314.jpg',
            price: '₹40 per kg',
        },
        {
            name:'Mango',
            image:'https://e7.pngegg.com/pngimages/493/777/png-clipart-slice-of-mango-mango-tea-fruit-mango-game-food-thumbnail.png',
            price: '₹80 each',
        },
        {
            name:'Strawberry',
            image:'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_1280.jpg',
            price: '₹50 per 100g',
        },
        {
            name:'Grape',
            image:'https://static.vecteezy.com/system/resources/previews/001/223/778/non_2x/grapes-isolated-on-white-background-free-photo.jpg',
            price: '₹30 per 100g',
        },
        {
            name:'Pineapple',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2wh13LL8Cns7uaDwsvIklx7w0G_ISW2zpEu8H0WPkQ&s',
            price: '₹100 each',
        },
        {
            name:'Watermelon',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtV0xTzgjKHYtoQXXTjWAdki2ElKrYQYhsoBkYR8lRJQ&s',
            price: '₹40 per kg',
        },
        {
            name:'Kiwi',
            image:'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg',
            price: '₹50 each',
        },
        {
            name:'Peach',
            image:'https://t3.ftcdn.net/jpg/03/00/59/16/360_F_300591692_sE2Zpz9hoU0H1Klz0JzRw1F74HO7vWne.jpg',
            price: '₹40 each',
        },
        {
            name:'Pear',
            image:'https://images.healthshots.com/healthshots/en/uploads/2022/12/16102013/pear-for-skincare.jpg',
            price: '₹35 each',
        },
        {
            name:'Cherry',
            image:'https://media.istockphoto.com/id/506627545/photo/cherry-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xa-4D_CcLiARKWnDKU-blrB0NWHQKpklO7fLswGmbEs=',
            price: '₹70 per 100g',
        },
        {
            name:'Blueberry',
            image:'https://img.freepik.com/free-vector/fresh-blueberries-with-water-drops-green-leaves-white-background-realistic-vector-illustration_1284-77363.jpg',
            price: '₹80 per 100g',
        },
        {
            name:'Raspberry',
            image:'https://t4.ftcdn.net/jpg/05/35/26/95/360_F_535269565_W3ScF93L74MHNxgreu1KREMRwE2SHbOQ.jpg',
            price: '₹60 per 100g',
        },
        {
            name:'Avocado',
            image:'https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg',
            price: '₹90 each',
        },
        {
            name:'Papaya',
            image:'https://m.media-amazon.com/images/I/61CuiyI4aBL._AC_UF1000,1000_QL80_.jpg',
            price: '₹60 each',
        },
        {
            name:'Lemon',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAezVBJI5c6eDoBRqO1NHzSG9R9UqDROIXoUIkY_FRSQ&s',
            price: '₹10 each',
        },
        {
            name:'Lime',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWceMdxjmfGy4Ha68lFnOZw-Pc-wMOqluC0cUuLmenw&s',
            price: '₹8 each',
        },
        {
            name:'Coconut',
            image:'https://draxe.com/wp-content/uploads/2022/12/DrAxeEatingCoconutsHeader.jpg',
            price: '₹50 each',
        },
        {
            name:'Pomegranate',
            image:'https://m.media-amazon.com/images/I/611a1wD9ZGL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
            price: '₹60 each',
        },
        {
            name:'Guava',
            image:'https://cdn.shopify.com/s/files/1/0082/6150/0991/files/Whole-and-cut-pink-guava-fruits_0c07bc86-c3b7-4eec-8e4e-a0d3abc3b846.jpg?v=1690451848',
            price: '₹20 each',
        },
    ]
    return<>
    
    <h1 style={{textAlign:'center'}}>Home Page</h1>
    <div className='fruit-list'>
        {Fruits.map((data)=>  <CardPage{...data}/>)}
        </div>
      
    </>   
}
export default HomePage;