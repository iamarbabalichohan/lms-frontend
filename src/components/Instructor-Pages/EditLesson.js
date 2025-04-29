import DashBoardHeader from "../UI/DashBoardHeader";

const EditLesson = () => {
  return (
    <div className="p-6 pb-32 px-4 sm:px-6 lg:px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="COURSES" subTitle="Add Lesson" />
      <div className="bg-gray-100 space-y-8">
        <div className="bg-white shadow rounded p-6 flex flex-wrap md:flex-nowrap gap-6">
          <div className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row sm:gap-52 gap-6">
              <h1 className="text-[13px] text-gray-400">Preview</h1>
              <div className="flex items-center gap-4">
                <img
                  src="/assets/coursevuejs.png"
                  alt="Preview"
                  className="w-24 h-20 rounded"
                />
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Choose file
                  </label>
                  <input
                    type="file"
                    className="block w-full mt-1 text-sm text-gray-700 border rounded px-2 py-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-6 sm:gap-56">
              <label className="text-[13px] font-medium text-gray-400 block mb-1">
                Title
              </label>
              <input
                type="text"
                placeholder="Write an awesome title"
                className="w-full sm:w-64 border rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="flex gap-6 sm:gap-52">
              <label className="text-[13px] font-medium text-gray-400 block mb-1">
                Course
              </label>
              <select className="w-full sm:w-64 border rounded px-3 py-2 text-sm">
                <option>Vue.js</option>
                <option>React.js</option>
                <option>Node.js</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-40">
                <label className="text-[13px] w-24 font-medium text-gray-400 block mb-1">
                  Upload Video
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="https://player.vimeo.com/video/..."
                    className="w-full sm:w-64 border rounded px-3 py-2 text-sm"
                  />
                  <p className="text-xs text-gray-400 mt-1">📽 Paste Video</p>
                </div>
              </div>
              <div className="w-full sm:w-[300px] h-[180px]">
                <iframe
                  className="w-full h-full rounded"
                  src="https://player.vimeo.com/video/97243285"
                  title="Video Preview"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h3 className="text-[23px] text-gray-500 mb-4 border-b pb-4">
            Files
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-32">
            <div className="border-2 w-full sm:w-96 border-gray-300 rounded p-10 text-center text-gray-500 text-sm mb-6">
              Drop files here to upload
            </div>

            <div className="text-sm text-gray-700">
              <p className="mb-2">📂 lesson files</p>
              <ul className="ml-6 list-none space-y-1">
                <li>lesson-1-install.zip</li>
                <li>lesson-1-steps.zip</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLesson;
