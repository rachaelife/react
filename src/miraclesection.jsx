import { useState, useEffect } from "react";
export default function App() {
  const [time, setTime] = useState({
    days: 0,
    hours: 2,
    minutes: 18,
    seconds: 46,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        let { days, hours, minutes, seconds } = t;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-8">
      
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">

        {/* CARD 1 */}
        <div
          className="
            rounded-2xl 
            p-8 
            text-white 
            h-[520px]
            bg-cover bg-no-repeat bg-bottom
            flex flex-col items-center
            backgroundImage: url('src/assets/fruit1.jpg');
          "
        >
          {/* TOP CONTENT */}
          <div className="text-center mt-4">
            <p className="uppercase text-xs tracking-widest opacity-80">
              BEST DEALS
            </p>
            <h2 className="text-3xl font-bold mt-1">Sale of the Month</h2>

            <div className="flex gap-6 mt-4 justify-center font-bold">
              <div className="text-center">
                <p className="text-xl">{String(time.days).padStart(2, "0")}</p>
                <span className="text-[10px]">DAYS</span>
              </div>
              <div className="text-center">
                <p className="text-xl">{String(time.hours).padStart(2, "0")}</p>
                <span className="text-[10px]">HOURS</span>
              </div>
              <div className="text-center">
                <p className="text-xl">{String(time.minutes).padStart(2, "0")}</p>
                <span className="text-[10px]">MINS</span>
              </div>
              <div className="text-center">
                <p className="text-xl">{String(time.seconds).padStart(2, "0")}</p>
                <span className="text-[10px]">SECS</span>
              </div>
            </div>

            <button className="mt-5 bg-white text-green-600 px-6 py-2 rounded-full font-semibold shadow">
              Shop Now →
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="
            rounded-2xl 
            p-8 
            text-white 
            h-[520px]
            bg-cover bg-no-repeat bg-bottom
            flex flex-col items-center
            backgroundImage: url('src/assets/fruit2.jpg');
          "
        >
          <div className="text-center mt-4">
            <p className="uppercase text-xs tracking-widest opacity-70">
              85% FAT FREE
            </p>
            <h2 className="text-3xl font-bold mt-1">Low-Fat Meat</h2>

            <p className="mt-2 text-lg">
              Started at{" "}
              <span className="text-yellow-400 font-bold">$79.99</span>
            </p>

            <button className="mt-5 bg-white text-green-600 px-6 py-2 rounded-full font-semibold shadow">
              Shop Now →
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className="
            rounded-2xl 
            p-8 
            h-[520px]
            bg-cover bg-no-repeat bg-bottom
            flex flex-col items-center
            backgroundImage: url('src/assets/fruit3.jpg');
          "
        >
          <div className="text-center mt-4">
            <p className="uppercase text-xs tracking-widest opacity-90">
              SUMMER SALE
            </p>
            <h2 className="text-3xl font-bold mt-1">100% Fresh Fruit</h2>

            <p className="mt-3 text-lg">
              Up to{" "}
              <span className="bg-black text-white px-2 py-1 rounded text-sm">
                64% OFF
              </span>
            </p>

            <button className="mt-5 bg-white text-green-600 px-6 py-2 rounded-full font-semibold shadow">
              Shop Now →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
