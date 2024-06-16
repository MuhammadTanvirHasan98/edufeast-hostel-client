import Banner from "../../Components/Home/Banner/Banner";
import CategoryTabs from "../../Components/Home/Tabs/CategoryTabs";



const Home = () => {
  return (
    <div className="space-y-44">
       <Banner/>
       <CategoryTabs/>
    </div>
  );
};

export default Home;