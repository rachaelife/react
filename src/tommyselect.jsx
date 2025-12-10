// import { Bs0Circle } from "react-icons/bs"
import apple from "./assets/apple.png";
import fruit from "./assets/fruit.png";
import vegetables from "./assets/vegetables.png";
import meat from "./assets/meat.png";
import juice from "./assets/juice.png";
import beverages from "./assets/beverages.png";
// second row
import bread from "./assets/bread.png";
import bakingneeds from "./assets/bakingneeds.png";
import cooking from "./assets/cooking.png";
import diabeticfood from "./assets/diabeticfood.png";
import dish from "./assets/dish.png";
import oil from "./assets/oil.png";




function App() {
  

  return (
 <>
 
 <div className="text-green-400 flex items-center justify-center" > Category</div>
 <h2 className="flex items-center justify-center">Shop by Top Categories</h2>

 <div className="flex  gap-2 p-3 text-center">
 <div className="border-1 border-black  p-2 bg-white">
 <img src={fruit} alt="fruit" className="w-44 " />
 <p>fresh fruit</p>
 </div>
 <div className="border-2 border-green-400  shadow-green-500/50  p-2 bg-white">
<img src={vegetables} alt="vegetables" className="w-44 " />
 <p className="text-green-500">Fresh Vegatables  </p>
 </div>
  <div className="border-1 border-black  p-2 bg-white">
<img src={meat} alt="meat" className="w-44  " />
 <p>fresh fruit</p>
 </div>
  <div className="border-1 border-black  p-2 bg-white">
<img src={juice} alt="juice" className="w-44  " />
 <p>fresh fruit</p>
 </div>
  <div className=" border-1 border-black  p-2 bg-white">
<img src={beverages} alt="beverages" className="w-44 " />
 <p>fresh fruit</p>
 </div>
  <div className=" border-1 border-black   p-2 bg-white">
<img src={apple} alt="apple" className="w-44" />
 <p>fresh fruit</p>
 </div>
 </div>

 {/* second row */}

  <div className="flex  gap-2 p-3 text-center">
 <div className="border-1 border-black  p-2 bg-white">
 <img src={bread} alt="bread" className="w-44 " />
 <p>Bread&Bakery</p>
 </div>
 <div className="border-1 border-black  p-2 bg-white ">
<img src={bakingneeds} alt="bakingneeds" className="w-44 " />
 <p>Baking needs</p>
 </div>
  <div className="border-1 border-black  p-2 bg-white">
<img src={cooking} alt="cooking" className="w-44  " />
 <p>Cooking</p>
 </div>
  <div className="border-1 border-black  p-2 bg-white">
<img src={diabeticfood} alt="diabeticfood" className="w-44  " />
 <p>Diabetic Food</p>
 </div>
  <div className=" border-1 border-black  p-2 bg-white">
<img src={dish} alt="dish" className="w-44 " />
 <p>Dish</p>
 </div>
  <div className=" border-1 border-black   p-2 bg-white">
<img src={oil} alt="oil" className="w-44" />
 <p>Oil</p>
 </div>
 </div>

 

</>
  )
}

export default App
