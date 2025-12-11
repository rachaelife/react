import { Bs0Circle } from "react-icons/bs"


function App() {
  // COUNTDOWN TIMER (Set the timer for 24 hours from now)
function startCountdown() {
  const countdownElements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  // Set countdown for 24 hours from now
  const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      countdownElements.days.textContent = "00";
      countdownElements.hours.textContent = "00";
      countdownElements.minutes.textContent = "00";
      countdownElements.seconds.textContent = "00";
      return;
    }

    // Time calculations
    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");

    // Update UI
    countdownElements.days.textContent = days;
    countdownElements.hours.textContent = hours;
    countdownElements.minutes.textContent = minutes;
    countdownElements.seconds.textContent = seconds;
  }, 1000);
}

startCountdown();


  return (
 <>
 
   
 
<body class="bg-gray-100 p-10 font-sans">

  <h1 class="text-3xl font-bold mb-6">Hot Deals</h1>

  
  <div class="grid lg:grid-cols-5 lg:grid-rows-3 gap-0">

   
    <div class="col-span-2 row-span-2 border border-green-300 p-6 bg-white rounded-xl shadow-sm flex flex-col items-center">
      <img src="src/assets/apple.jpg" class="w-full h-[330px] object-contain" />

      <button class="bg-green-600 text-white font-semibold px-22 py-2 rounded-full mt-6">Add to Cart</button>

      <div class="text-center mt-4">
        <h2 class="font-semibold text-lg">Chinese cabbage</h2>
        <p class="text-xl font-bold text-gray-900 mt-1">$12.00 <span class="line-through text-gray-400">$24.00</span></p>
        <p class="text-yellow-500 text-sm mt-1">★★★★★ <span class=" text-gray-400">(524 Feedback)</span></p>
      </div>

      
      <p class="text-center text-gray-600 mt-4">Hurry up! Offer ends in:</p>
      <div class="grid grid-cols-4 mt-3 text-center w-full">
        <div><p id="days" class="text-xl font-bold">01</p><p class="text-gray-400 text-xs">DAYS</p></div>
        <div><p id="hours" class="text-xl font-bold">23</p><p class="text-gray-400 text-xs">HRS</p></div>
        <div><p id="minutes" class="text-xl font-bold">34</p><p class="text-gray-400 text-xs">MINS</p></div>
        <div><p id="seconds" class="text-xl font-bold">57</p><p class="text-gray-400 text-xs">SECS</p></div>
      </div>
    </div>

    
    <div class="border bg-white p-3 flex flex-col items-start">
      <img src="src/assets/cabbage.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Chinese cabbage</p>
      <p class="font-bold">$12.00</p>
      <p class="text-yellow-500 text-xs">★★★★☆</p>
    </div>

    <div class="border bg-white p-3 flex flex-col items-start">
      <img src="src/assets/lettuce.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Green Lettuce</p>
      <p class="font-bold">$9.00</p>
      <p class="text-yellow-500 text-xs">★★★★☆</p>
    </div>

    <div class="border bg-white p-3 flex flex-col items-start">
      <img src="src/assets/eggplant.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Eggplant</p>
      <p class="font-bold">$34.00</p>
      <p class="text-yellow-500 text-xs">★★★★★</p>
    </div>

   
    <div class="border bg-white p-3 flex flex-col items-start">
      <img src="src/assets/mush.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Fresh Cauliflower</p>
      <p class="font-bold">$12.00</p>
      <p class="text-yellow-500 text-xs">★★★★☆</p>
    </div>

    <div class="border bg-white p-3 flex flex-col items-start relative">
      <span class="absolute top-1 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale 50%</span>
      <img src="src/assets/big pepper.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Green Capsicum</p>
      <p class="font-bold">$9.00 <span class="line-through text-gray-400">$20.99</span></p>
      <p class="text-yellow-500 text-xs">★★★★☆</p>
    </div>

    <div class="border bg-white p-3 flex flex-col items-start">
      <img src="src/assets/green pepper.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Green Chili</p>
      <p class="font-bold">$34.00</p>
      <p class="text-yellow-500 text-xs">★★★★★</p>
    </div>

    
    <div class="border bg-white p-3 flex flex-col items-start">
      <img src="src/assets/potato.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Big Potatoes</p>
      <p class="font-bold">$12.00</p>
      <p class="text-yellow-500 text-xs">★★★★☆</p>
    </div>

    <div class="border bg-white p-3 flex flex-col items-start">
      <img src="src/assets/corn.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Corn</p>
      <p class="font-bold">$12.00</p>
      <p class="text-yellow-500 text-xs">★★★★☆</p>
    </div>

    <div class="border bg-white p-3 flex flex-col items-start">
      <img src="src/assets/red pepper.jpg" class="w-full h-[220px] object-contain item-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Red Chili</p>
      <p class="font-bold">$12.00</p>
      <p class="text-yellow-500 text-xs">★★★★★</p>
    </div>

    <div class="border bg-white p-3 flex flex-col items-start relative">
      <span class="absolute top-1 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale 50%</span>
      <img src="src/assets/tomato.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Red Tomatoes</p>
      <p class="font-bold">$9.00 <span class="line-through text-gray-400">$20.99</span></p>
      <p class="text-yellow-500 text-xs">★★★★★</p>
    </div>

    <div class="border bg-white p-3 flex flex-col items-start border-purple-400">
      <img src="src/assets/mango.jpg" class="w-full h-[220px] object-contain items-center" />
      <p class="mt-2 text-sm font-medium text-gray-400">Surajpur Mango</p>
      <p class="font-bold">$34.00</p>
      <p class="text-yellow-500 text-sm">★★★★★</p>
    </div>

  </div>
</body>


</>
  )
}

export default App
