export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl max-w-xl w-full p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
          Coming Soon
        </h1>
        <p className="text-gray-600 mb-6">
          We’re preparing something amazing for you. Stay in the loop by subscribing below.
        </p>

        <form className="flex items-center gap-2 justify-center mb-2 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-full md:w-2/3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-medium text-sm transition duration-200 w-full md:w-auto"
          >
            Notify Me
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </div>
    </div>
  );
}
