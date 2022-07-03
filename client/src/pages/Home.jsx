import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Slider from '../Components/Slider';
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home; 