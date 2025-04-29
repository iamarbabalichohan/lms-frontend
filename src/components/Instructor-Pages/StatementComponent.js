import DashBoardHeader from "../UI/DashBoardHeader";
import NextPreviousButton from "./buttons/NextPrevious";

const courseData = [
  {
    img: "https://learnplus.demo.frontendmatter.com/assets/images/gulp.png",
    title: "Learn Angular Fundamentals",
    invoice: "#8737",
    amount: "89",
    date: "15 Nov 2018",
  },
  {
    img: "https://learnplus.demo.frontendmatter.com/assets/images/github.png",
    title: "Introduction to TypeScript",
    invoice: "#8736",
    amount: "89",
    date: "14 Nov 2018",
  },
  {
    img: "https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png",
    title: "Angular Unit Testing",
    invoice: "#8735",
    amount: "89",
    date: "13 Nov 2018",
  },
  {
    img: "https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png",
    title: "Angular Routing In-Depth",
    invoice: "#8734",
    amount: "89",
    date: "12 Nov 2018",
  },
];

const StatementComponent = () => {
  return (
    <div className="p-6 pb-32 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="STATEMENT" subTitle="Statement" />

      <div className="box-border">
        <div className="relative flex flex-col min-w-0 break-words border border-[#f0f1f2] rounded bg-white shadow-[0_2px_3px_rgba(56,59,61,0.05)] mb-6">
          <div className="card-header form-inline flex flex-wrap items-center p-3.5 border-b border-gray-200 mb-0 bg-white rounded-t-[0.1875rem]">
            <div className="form-group ml-auto flex items-center mb-0">
              <label
                htmlFor="flatpickrSample02"
                className="form-label text-xs uppercase font-medium text-gray-500 mb-0 mr-4 flex items-center justify-center"
              >
                Date
              </label>
              <input
                id="flatpickrSample02"
                className="form-control flatpickr-input text-base font-normal leading-6 text-gray-700 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 py-2.5 px-3 cursor-pointer"
                type="text"
                value="2018-10-07 to 2018-10-15"
                placeholder="Select dates"
                readOnly
              />
            </div>
          </div>

          <div
            className="table-responsive"
            style={{
              boxSizing: "border-box",
              display: "block",
              width: "100%",
              overflowX: "auto",
              marginBottom: "1rem",
            }}
          >
            <table
              className="table table-nowrap m-0 min-w-full"
              style={{
                boxSizing: "border-box",
                borderCollapse: "collapse",
                width: "100%",
                color: "rgb(56, 59, 61)",
                margin: "0px",
                marginBottom: "0px",
              }}
            >
              <thead className="thead-light">
                <tr>
                  <th
                    colSpan="2"
                    className="text-left align-left uppercase text-xs font-medium leading-6 text-gray-400 border-b-2 border-gray-200 bg-gray-100 px-3 py-1.5"
                  >
                    <a
                      href="/#"
                      className="sort inline-flex items-center text-inherit no-underline bg-transparent"
                    >
                      Course
                    </a>
                    <a
                      href="/#"
                      className="sort inline-flex items-center text-inherit no-underline bg-transparent ml-4"
                    >
                      Document
                    </a>
                    <a
                      href="/#"
                      className="sort inline-flex items-center text-inherit no-underline bg-transparent ml-4"
                    >
                      Amount
                    </a>
                    <a
                      href="/#"
                      className="sort desc inline-flex items-center text-gray-800 underline ml-4"
                    >
                      Date
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody className="list" style={{ boxSizing: "border-box" }}>
                {courseData.map((course, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap align-middle leading-[1.2] px-3 py-2.5 border-t border-gray-200">
                      <div className="media flex items-center mt-0">
                        <a
                          href="https://learnplus.demo.frontendmatter.com/instructor-course-edit.html"
                          className="avatar avatar-4by3 avatar-sm text-[#2196F3D9] text-base inline-block relative z-0 h-10 w-16 mr-4"
                        >
                          <img
                            className="avatar-img rounded"
                            alt="course"
                            src={course.img}
                          />
                        </a>
                        <div className="media-body flex-1">
                          <a
                            href="https://learnplus.demo.frontendmatter.com/instructor-course-edit.html"
                            className="text-body js-lists-values-course text-[#383B3D] no-underline"
                          >
                            <strong className="font-medium">
                              {course.title}
                            </strong>
                          </a>
                          <br />
                          <small className="text-muted mr-1 text-xs font-normal text-[#B8BDC2]">
                            Invoice
                            <a
                              href="https://learnplus.demo.frontendmatter.com/instructor-invoice.html"
                              className="js-lists-values-document text-inherit no-underline ml-1"
                            >
                              {course.invoice}
                            </a>{" "}
                            - $
                            <span className="js-lists-values-amount">
                              {course.amount}
                            </span>{" "}
                            USD
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap align-middle leading-[1.2] px-3 py-2.5 border-t border-gray-200 text-right">
                      <small className="text-muted text-uppercase js-lists-values-date text-xs font-normal text-[#B8BDC2]">
                        {course.date}
                      </small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <NextPreviousButton />
      </div>
    </div>
  );
};

export default StatementComponent;
