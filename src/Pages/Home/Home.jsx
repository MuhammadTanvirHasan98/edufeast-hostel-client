import Banner from "../../Components/Home/Banner/Banner";
import Membership from "../../Components/Home/Membership/Membership";
import CategoryTabs from "../../Components/Home/Tabs/CategoryTabs";



const Home = () => {
  return (
    <div className="space-y-44 mb-72">
       <Banner/>
       <CategoryTabs/>
       <Membership/>
    </div>
  );
};

export default Home;