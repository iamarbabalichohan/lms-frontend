import DashBoardHeader from "../UI/DashBoardHeader";
import { MdMenu } from "react-icons/md";

const EditQuizComponent = () => {
  const items = [
    {
      id: 1,
      title: "Installation",
      link: "https://learnplus.demo.frontendmatter.com/instructor-quiz-edit.html#",
    },
    {
      id: 2,
      title: "The MVC architectural pattern",
      link: "https://learnplus.demo.frontendmatter.com/instructor-quiz-edit.html#",
    },
    {
      id: 3,
      title: "Database Models",
      link: "https://learnplus.demo.frontendmatter.com/instructor-quiz-edit.html#",
    },
    {
      id: 4,
      title: "Database Access",
      link: "https://learnplus.demo.frontendmatter.com/instructor-quiz-edit.html#",
    },
    {
      id: 5,
      title: "Eloquent Basics",
      link: "https://learnplus.demo.frontendmatter.com/instructor-quiz-edit.html#",
    },
    {
      id: 6,
      title: "Take Quiz",
      link: "https://learnplus.demo.frontendmatter.com/instructor-quiz-edit.html#",
    },
    {
      id: 7,
      title: "The MVC architectural pattern",
      link: "https://learnplus.demo.frontendmatter.com/instructor-quiz-edit.html#",
    },
  ];
  return (
    <div className="p-6 pb-32 px-4 sm:px-6 lg:px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader
        title="QUIZ MANAGER"
        statement="EDIT QUIZ"
        subTitle="Vue.js Deploy Quiz"
      />

      <div className="card relative flex flex-col min-w-0 break-words border border-gray-200 rounded-md bg-white shadow-sm mb-6">
        <div className="px-5 py-3 border-b border-[#f0f1f2] bg-white rounded-t-[calc(0.1875rem-1px)] mb-0">
          <h4 className="font-oswald font-normal text-[1.414rem] leading-[1.5] text-[rgba(57,68,77,0.84)] mt-0 mb-0">
            Basic
          </h4>
        </div>

        <div className="card-body flex-1 min-h-[1px] p-5">
          <form action="#" style={{ boxSizing: "border-box" }}>
            <div className="flex flex-wrap -mx-2.5 mb-4">
              <label
                htmlFor="quiz_title"
                className="w-full sm:w-1/4 px-2.5 pt-[calc(0.5rem+1px)] pb-[calc(0.5rem+1px)] text-[0.75rem] font-medium uppercase text-[rgba(56,59,61,0.5)]"
              >
                Quiz Title:
              </label>
              <div className="w-full sm:w-3/4 px-2.5">
                <input
                  id="quiz_title"
                  type="text"
                  defaultValue="Vue.js Introduction"
                  placeholder="Title"
                  className="block w-full h-[calc(1.5em+2px+1rem)] text-[0.9375rem] font-normal leading-[1.5] text-[rgb(73,80,87)] border border-[#f0f1f2] rounded bg-white px-3 py-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)]"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-2.5 mb-4">
              <label
                htmlFor="course_title"
                className="w-full sm:w-1/4 px-2.5 pt-[calc(0.5rem+1px)] pb-[calc(0.5rem+1px)] text-[0.75rem] font-medium uppercase text-[rgba(56,59,61,0.5)]"
              >
                Course:
              </label>
              <div className="w-full sm:w-1/3 px-2.5">
                <select
                  id="course_title"
                  defaultValue="#"
                  className={`block w-full h-[calc(1.5em+2px+1rem)] text-[0.9375rem] font-normal leading-[1.5] text-[rgb(73,80,87)] border border-[#f0f1f2] rounded bg-white bg-[url(\\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\\"/)] bg-[length:8px_10px] bg-[right_0.75rem_center] bg-no-repeat shadow-[inset_0_1px_2px_rgba(0,0,0,0.075)] px-3 pr-7 py-2 appearance-none`}
                >
                  <option value="#">HTML</option>
                  <option value="#">Angular JS</option>
                  <option value="#">Vue.js</option>
                  <option value="#">CSS / LESS</option>
                  <option value="#">Design / Concept</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap -mx-2.5 mb-4">
              <label
                htmlFor="quiz_image"
                className="w-full sm:w-1/4 px-2.5 pt-[calc(0.5rem+1px)] pb-[calc(0.5rem+1px)] text-[0.75rem] font-medium uppercase text-[rgba(56,59,61,0.5)]"
              >
                Quiz Image:
              </label>
              <div className="w-full sm:w-1/3 px-2.5">
                <p className="mt-0 mb-4">
                  <img
                    alt=""
                    src="https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png"
                    width={150}
                    className="rounded"
                  />
                </p>
                <div className="relative inline-block w-full h-[calc(1.5em+2px+1rem)]">
                  <input
                    id="quiz_image"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                  />
                  <label
                    htmlFor="quiz_image"
                    className="absolute inset-0 z-10 h-[calc(1.5em+2px+1rem)] whitespace-nowrap overflow-hidden mb-2 px-3 py-2 border border-[#f0f1f2] rounded bg-white text-[rgb(73,80,87)] font-normal leading-[1.5] shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)]"
                  >
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2.5 mb-4">
              <label
                htmlFor="cmn-toggle"
                className="w-full sm:w-1/4 px-2.5 pt-[calc(0.5rem+1px)] pb-[calc(0.5rem+1px)] text-[0.75rem] font-medium uppercase text-[rgba(56,59,61,0.5)]"
              >
                Timeframe
              </label>
              <div className="w-full sm:w-3/4 px-2.5">
                <div className="mb-4">
                  <div className="relative z-10 block w-12 h-6">
                    <input
                      type="checkbox"
                      id="cmn-toggle"
                      role="switch"
                      className="sr-only peer"
                    />
                    <label
                      htmlFor="cmn-toggle"
                      className="block h-full w-full rounded-full bg-gray-300 peer-checked:bg-blue-500 cursor-pointer transition duration-300 relative"
                    >
                      <span className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center flex-wrap">
                  <div className="mr-2">
                    <input
                      type="number"
                      defaultValue="4"
                      className="w-14 text-center border border-gray-200 rounded bg-white text-[15px] font-normal leading-[1.5] shadow-inner py-2 px-3"
                    />
                  </div>
                  <div>
                    <select
                      defaultValue="hour"
                      className={`appearance-none bg-white border border-gray-200 rounded py-2 px-3 pr-8 text-[15px] font-normal leading-[1.5] text-gray-700 shadow-inner bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_0.75rem_center] bg-[length:8px_10px]`}
                    >
                      <option value="hour">Hours</option>
                      <option value="minutes">Minutes</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-2.5 mb-0">
              <div className="w-full sm:w-3/4 sm:ml-auto px-2.5">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center text-white text-[0.9375rem] font-normal bg-red-500 border border-red-500 hover:bg-red-600 transition duration-150 ease-in-out shadow-sm px-4 py-2 rounded cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card relative flex flex-col min-w-0 break-words rounded border border-gray-200  bg-white shadow-sm mb-6">
        <div className="bg-white px-5 py-3 border-b border-gray-200  rounded">
          <h4 className="text-[1.414rem] font-normal leading-[1.5] text-[rgba(57,68,77,0.84)] font-oswald m-0">
            Questions
          </h4>
        </div>

        <div className="bg-white px-5 py-3 border-b border-gray-200 mb-0">
          <a
            href="https://learnplus.demo.frontendmatter.com/instructor-quiz-edit.html#"
            className="inline-flex items-center justify-center text-[0.9375rem] font-normal text-gray-600 border border-gray-500 px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-150"
          >
            Add Question{" "}
            <i className="material-icons ml-1 text-[20px] align-sub text-inherit leading-inherit">
              +
            </i>
          </a>
        </div>

        <div id="nestable" className="nestable relative ">
          <ul className="list-group w-full px-0 py-0">
            {items.map((item, index) => (
              <li
                key={item.id}
                className="mb-2 px-0 py-0 bg-white border border-t-0 shadow-sm rounded-md overflow-hidden"
              >
                <div className="flex justify-between items-center p-3">
                  <div className="flex items-center">
                    <MdMenu className="text-[1.4rem] border  mr-3 text-[#bdc3c7]" />
                    <h5 className=" text-[16px] text-gray-500 m-0">
                      {item.title}
                    </h5>
                  </div>
                  <div className="border py-2 px-1 bg-[#2196F3] rounded text-white ">
                    <a href={item.link} className="text-[1rem] ">
                      Edit
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditQuizComponent;
