import DashBoardHeader from "../UI/DashBoardHeader";
import { IoMenu } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";

const lessons = [
  {
    title: "Awesome Vue.js with SASS Processing",
    image: "https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png",
    updated: "1 month ago",
    link: "https://learnplus.demo.frontendmatter.com/instructor-lesson-add.html",
  },
  {
    title: "Github Webhooks for Beginners",
    image: "https://learnplus.demo.frontendmatter.com/assets/images/nodejs.png",
    updated: "1 month ago",
    link: "https://learnplus.demo.frontendmatter.com/instructor-lesson-add.html",
  },
  {
    title: "Browserify: Writing Modular JavaScript",
    image: "https://learnplus.demo.frontendmatter.com/assets/images/gulp.png",
    updated: "1 month ago",
    link: "https://learnplus.demo.frontendmatter.com/instructor-lesson-add.html",
  },
];
const iconData = [
  { icon: <CgProfile />, bg: "#0097B2" },
  { icon: <FaStar />, bg: "#BA0000" },
  { icon: <MdOutlineOndemandVideo />, bg: "#22c55e" }, // green-500
  { icon: <HiMiniCurrencyDollar />, bg: "#facc15" }, // yellow-500
  { icon: <IoBagCheck />, bg: "#f97316" }, // orange-500
];

const EditCourse = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 pb-32 px-44 bg-gray-100 w-full overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <DashBoardHeader
          title="COURSES"
          statement="EDIT COURSE"
          subTitle="Edit Course"
        />
        <div className="flex gap-2 text-[14px]  ">
          <button className="py-2 h-10 sm:mt-12 px-4 bg-[#BA0000] rounded text-white ">
            Save
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded-xl shadow">
            <h2 className="text-[23px] border-b pb-2 text-gray-500 mb-4">
              Basic Information
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">
                TITLE
              </label>
              <input
                type="text"
                className="mt-1 block w-full border text-gray-500 border-gray-200 rounded-md shadow-sm p-2"
                defaultValue="Basics of Vue.js"
              />
            </div>
            <div>
              <label className="block text-sm uppercase font-medium text-gray-400">
                Description
              </label>

              <textarea
                rows="5"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cumque necessitatibus distinctio adipisci eius, unde dignissimos maxime doloribus quisquam non harum?"
              />
            </div>
          </div>

          <div className="bg-white p-6  rounded-xl shadow">
            <iframe
              className="w-full rounded"
              height="200"
              src="https://player.vimeo.com/video/77091974"
              title="Course Preview"
              allowFullScreen
            ></iframe>
            <input
              type="text"
              className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              defaultValue="https://player.vimeo.com/video/"
            />
          </div>

          <div className="col-span-2 bg-white p-6 rounded-xl shadow">
            <h2 className="text-[23px] text-gray-500 border-b pb-2 mb-4">
              Lessons
            </h2>
            <button
              onClick={() => navigate("/Course-EditLesson")}
              className="mb-4 px-4 py-2 bg-[#0097B2] text-white rounded hover:bg-[#0097B2]"
            >
              Add Lesson +
            </button>
            <div className="space-y-4">
              {[
                {
                  title: "Awesome Vue.js with SASS Processing",
                  icon: "/assets/coursevuejs.png",
                },
                {
                  title: "Github Webhooks for Beginners",
                  icon: "assets/coursenodejs.png",
                },
                {
                  title: "Browserify: Writing Modular JavaScript",
                  icon: "/assets/coursegulp.png",
                },
              ].map((lesson, i) => (
                <div key={i} className="flex gap-4">
                  <div className="border rounded py-2 h-10  text-[23px]">
                    <IoMenu />
                  </div>
                  <div className="flex items-center w-full border p-3 rounded">
                    <img
                      src={lesson.icon}
                      alt="lesson-icon"
                      className="w-12 h-12 mr-4 rounded object-contain"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{lesson.title}</div>
                      <div className="text-sm text-gray-500">
                        updated 1 month ago
                      </div>
                    </div>
                    <button className="text-gray-400 border rounded py-1 font-bold px-2">
                      <MdEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-[23px] text-gray-500">Meta</h2>
            <p className="mb-4 border-b pb-2">Extra Option</p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                <option>Vue.js</option>
                <option>React</option>
                <option>Angular</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                defaultValue={10}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                defaultValue="January 1, 2016"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                defaultValue="January 1, 2016"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Completion Badge
              </label>
              <div className="flex space-x-2 text-[13px] text-white">
                {iconData.map((item, index) => (
                  <span
                    key={index}
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.bg }}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditCourse;
