import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HeadingPart from "../../Common/HeadingPart";


const CategoryTabs = () => {

  

  return (
    <div>
      <HeadingPart
       heading='Meals by Category' 
       subHeading='Our All Meals'
       para="At EduFeast Hostel, we understand that every meal is an opportunity to nourish the body and delight the senses. That's why we've curated a diverse menu to cater to all your cravings throughout the day. Explore our delicious offerings by category"
       />
      <div className="flex justify-center items-center my-12">
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoryTabs;
