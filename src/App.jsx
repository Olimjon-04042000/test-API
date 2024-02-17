import SelectVariants from "./components/SelectVariants";
import Work from "./components/Work";

function App() {
  return (
    <div className="container">
      <h1 className="title text-[56px] font-semibold ">TEST API</h1> 
      <div className="flex">
        <Work />
        <div className="h-[400px] w-[1px] mr-14 bg-[#0000004d] "></div>
        <SelectVariants />
      </div>
    </div>
  );
}

export default App;
