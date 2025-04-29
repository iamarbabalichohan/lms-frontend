import DashBoardHeader from "../UI/DashBoardHeader";
import { FaPlayCircle } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";

const MyCourses = () => {
  const courses = [
    {
      title: "Learn VueJs the easy way!",
      lessons: "3 of 7",
      image: "/assets/coursevuejs.png",
      author: "Shani Raja",
      role: "Editor, Writing Coach & Lecturer",
      rating: 3,
      originalPrice: 200,
      discountedPrice: 120,
    },
    {
      title: "Gulp and Slush",
      lessons: "5 of 7",
      image: "/assets/coursegulp.png",
      author: "Shani Raja",
      role: "Editor, Writing Coach & Lecturer",
      rating: 4,
      originalPrice: 180,
      discountedPrice: 100,
    },
    {
      title: "Npm & Gulp Advanced Workflow",
      lessons: "7 of 7",
      image: "/assets/coursegulp.png",
      author: "Shani Raja",
      role: "Editor, Writing Coach & Lecturer",
      rating: 4,
      originalPrice: 180,
      discountedPrice: 100,
    },
    {
      title: "VueJs",
      lessons: "5 of 7",
      image: "/assets/coursevuejs.png",
      author: "Shani Raja",
      role: "Editor, Writing Coach & Lecturer",
      rating: 4,
      originalPrice: 180,
      discountedPrice: 100,
    },
    {
      title: "Github Webhooks for Beginners",
      lessons: "8 of 10",
      image: "/assets/coursegithub.png",
      author: "Shani Raja",
      role: "Editor, Writing Coach & Lecturer",
      rating: 4,
      originalPrice: 180,
      discountedPrice: 100,
    },
  ];
  return (
    <div className="p-6 md:pb-32 md:px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="MY COURSES" subTitle="My Courses" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.01]"
          >
            {/* Top image with avatars overlay (mocked) */}
            <div className="relative">
              <img src={course.image} alt="Course" className="w-full h-40" />
              <div className="absolute top-2 left-2 flex items-center space-x-[-10px]">
                <img
                  src="/assets/avatar1.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="avatar"
                />
                <img
                  src="/assets/avatar2.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="avatar"
                />
                <img
                  src="/assets/avatar3.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="avatar"
                />
                <span className="w-8 h-8 rounded-full bg-gray-300 text-sm flex items-center justify-center border-2 border-white text-gray-700 font-semibold">
                  +3
                </span>
              </div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold shadow-md">
                <p>{course.lessons} lectures</p>
                <p>3 hours video</p>
              </div>
            </div>

            {/* Course info */}
            <div className="p-4">
              <h3 className="text-gray-500 font-bold text-lg leading-tight">
                {course.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {course.author}, {course.role}
              </p>

              {/* Rating */}
              <div className="flex items-center mt-3 text-[#BA0000] text-sm">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < course.rating ? (
                    <FaStar key={i} className="mr-1" />
                  ) : (
                    <FaRegStar key={i} className="mr-1" />
                  )
                )}
              </div>

              {/* Price */}
              {/* <div className="flex justify-between items-center mt-3">
                <div>
                  <span className="line-through text-gray-400 text-sm">
                    ${course.originalPrice}
                  </span>
                  <span className="text-[#0097B2] font-bold text-lg ml-2">
                    ${course.discountedPrice}
                  </span>
                </div>
              </div> */}

              {/* Continue Button */}
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#0097B2] hover:bg-[#BA0000] text-white py-2 rounded transition duration-300">
                Continue <FaPlayCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyCourses;
