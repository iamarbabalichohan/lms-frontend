const NextPreviousButton = () => {
  return (
    <div className="mt-4 sm:mt-6 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm text-gray-600">
      <button className="opacity-50 cursor-not-allowed">&lt; Prev</button>
      <button className="bg-[#0097B2] text-white px-3 py-1 rounded">1</button>
      <button className="px-3 py-1 border rounded">2</button>
      <button className="text-[#0097B2]">Next &gt;</button>
    </div>
  );
};
export default NextPreviousButton;
