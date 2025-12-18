import combo1 from "./assets/combo1.jpg";
import { FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <section className="w-full flex justify-center py-10">
      <div
        className="w-[90%] h-[260px] rounded-xl overflow-hidden bg-cover bg-center relative"
        style={{ backgroundImage: `url(${combo1})` }}
      >
        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="ml-auto pr-12 max-w-md space-y-4 text-white">
            <h3 className="text-sm tracking-wide">SUMMER SALE</h3>

            <h1 className="text-4xl font-bold">
              <span className="text-orange-500">37%</span> OFF
            </h1>

            <p className="text-sm text-gray-200">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>

            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition">
              Shop Now
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
