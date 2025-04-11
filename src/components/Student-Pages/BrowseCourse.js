import DashBoardHeader from "../UI/DashBoardHeader";

const courses = [
  {
    title: "Learn VueJs",
    rating: 4,
    image: "/assets/coursevuejs.png",
    difficulty: "ADVANCED",
    description:
      "Let’s start with a quick tour of Vue’s data binding features. If you are more interested in ...",
    tag: "VUEJS",
  },
  {
    title: "Github Webhooks for Beginners",
    rating: 3,
    image: "/assets/coursegithub.png",
    difficulty: "INTERMEDIATE",
    description:
      "Learn the basics of Github and become a power Github developer.",
    tag: "GULP",
  },
  {
    title: "Npm & Gulp Advanced Workflow",
    rating: 3,
    image: "/assets/coursenodejs.png",
    difficulty: "BEGINNER",
    description:
      "Developing static website with fast and advanced gulp setup by managing all parts...",
    tag: "GULP",
  },
  {
    title: "Gulp & Slush Workflows",
    rating: 3,
    image: "/assets/coursegulp.png",
    difficulty: "ADVANCED",
    description:
      "Let’s start with a quick tour of Vue’s data binding features. If you are more interested in ...",
    tag: "GULP",
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-md h-[500px] shadow-md w-full">
      <div className="p-4 text-center mb-6">
        <h2 className="text-[23px] text-gray-600 font-semibold">
          {course.title}
        </h2>
        <div className="text-yellow-400 text-[25px] mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i}>{i < course.rating ? "★" : "☆"}</span>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 flex items-center justify-center h-48">
        <img src={course.image} alt={course.title} className="object-contain" />
      </div>
      <div className="p-4 text-sm mt-8">
        <p className="text-gray-400 font-semibold uppercase text-[12px] mb-1">
          {course.difficulty}
        </p>
        <p className="text-gray-700 text-[15px] mb-3">{course.description}</p>
        <span className="bg-red-600 text-white text-[12px] font-semibold px-2 py-1 rounded">
          {course.tag}
        </span>
      </div>
    </div>
  );
};

const BrowseCourseDashBoard = () => {
  return (
    <div className="p-6 pb-32 px-4 md:px-10 lg:px-20 xl:px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="COURSES" subTitle="Courses" />
      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default BrowseCourseDashBoard;
