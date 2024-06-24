import { useState } from "react";
import MealCard from "../../Components/Common/MealCard";
import Select from "react-select";
import useMeals from "../../Hooks/useMeals";
import LoadingSpinner from "../../Components/Common/LoadingSpinner";
import EmptyStateText from "../../Components/Common/EmptyStateText";

const AllMeals = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [search, setSearch] = useState("");

  const [allMeals, isLoading] = useMeals(
    search,
    selectedCategory,
    selectedPrice
  );
  console.log(allMeals);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearch(searchValue);
  };

  const handleCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory?.value || "");
    console.log(selectedCategory);
  };
  // console.log(selectedCategory);

  const handlePrice = (selectedPrice) => {
    setSelectedPrice(selectedPrice?.value || "");
    console.log(selectedPrice);
  };
  // console.log(selectedPrice);

  const categoryOptions = [
    { value: null, label: "Select" },
    { value: "breakfast", label: "Breakfast" },
    { value: "lunch", label: "Lunch" },
    { value: "dinner", label: "Dinner" },
  ];

  const priceOptions = [
    { value: null, label: "Select" },
    { value: "10-20", label: "$10 - $20" },
    { value: "20-30", label: "$20 - $30" },
    { value: "30-40", label: "$30 - $40" },
    { value: "40-50", label: "$40 - $50" },
    { value: "50-100", label: "$50 - $100" },
  ];

  return (
    <div className="w-[80%] mx-auto py-32 space-y-16">
      <div>
        {/*Search Field  */}
        <form onSubmit={handleSearch}>
          <div className="flex items-center mt-6 xl:w-[60%] lg:w-[70%] w-full mx-auto">
            <input
              type="text"
              placeholder="Search meals here..."
              name="search"
              className="block w-full rounded-r-none rtl:rounded-r-lg rtl:rounded-l-none  rounded-lg border bg-white px-5 lg:py-2.5 py-1.5 focus:outline-none focus:ring focus:border-blue-500 focus:ring-[#6092f6] focus:ring-opacity-40"
            />
            <button
              type="submit"
              className="lg:py-2.5 py-1.5 px-3 text-white bg-[#6caffa]  border border-r-0 rtl:rounded-r-lg  rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-r-lg font-bold"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex justify-between mt-10 gap-4">
          <div>
            <p className="mb-2 text-blue-400 font-semibold md:text-xl">
              Filter by Category:
            </p>
            <Select
              defaultValue={selectedCategory}
              onChange={handleCategory}
              options={categoryOptions}
              className="md:w-[200px] w-[140px]"
            />
          </div>
          <div>
            <p className="mb-2 text-blue-400 font-semibold md:text-xl">
              Filter by Price:
            </p>
            <Select
              defaultValue={selectedPrice}
              onChange={handlePrice}
              options={priceOptions}
              className="md:w-[200px] w-[140px]"
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div><LoadingSpinner smallHeight={true}/></div>
      ) : allMeals.length === 0 ? (
        <EmptyStateText text={'You have to try more...'}/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {allMeals.map((meal) => (
            <MealCard key={meal._id} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMeals;
