import reactLogo from "../assets/react.svg";

function PersonCard() {
  return (
    <div class="py-8 px-8 max-w-sm mx-auto bg-green rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        class="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0"
        src={reactLogo}
        alt="Woman's Face"
      />
      <div class="text-center space-x-6 space-y-2 sm:text-right">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Erin Lindford</p>
          <p class="text-slate-500 font-medium">Product Engineer</p>
        </div>
        <button class="px-4 py-1 text-sm text-tahiti-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
}


export default PersonCard;