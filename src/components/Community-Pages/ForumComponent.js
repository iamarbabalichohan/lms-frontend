import { MdDescription } from "react-icons/md";

const threads = [
  {
    id: 1,
    name: "Luci Bryant",
    time: "5 min ago",
    question: "Am I learning the right way?",
    userImg:
      "https://learnplus.demo.frontendmatter.com/assets/images/people/50/guy-1.jpg",
  },
  {
    id: 2,
    name: "Magnus Goldsmith",
    time: "7 min ago",
    question: "Can someone help me with the basic Setup?",
    userImg:
      "https://learnplus.demo.frontendmatter.com/assets/images/people/50/guy-2.jpg",
  },
  {
    id: 3,
    name: "Katelyn Rankin",
    time: "12 min ago",
    question: "I think this is the right way?",
    userImg:
      "https://learnplus.demo.frontendmatter.com/assets/images/people/50/guy-2.jpg",
  },
];

const forumThreads = [
  {
    id: 1,
    icon: "description",
    name: "Jenell D. Matney",
    time: "1 min ago",
    title: "Getting around AngularJS",
    userImg:
      "https://learnplus.demo.frontendmatter.com/assets/images/256_rsz_nicolas-horn-689011-unsplash.jpg",
  },
  {
    id: 2,
    icon: "description",
    name: "Sherri J. Cardenas",
    time: "3 min ago",
    title: "Responsive Bootstrap Question",
    userImg:
      "https://learnplus.demo.frontendmatter.com/assets/images/256_rsz_sharina-mae-agellon-377466-unsplash.jpg",
  },
  {
    id: 3,
    icon: "Joseph S. Ferland",
    name: "Sherri J. Cardenas",
    time: "10 min ago",
    title: "Can someone help me with the basic Setup?",
    userImg:
      "https://learnplus.demo.frontendmatter.com/assets/images/256_rsz_sharina-mae-agellon-377466-unsplash.jpg",
  },
];

const ForumCard = ({
  title,
  subtitle,
  threads,
  addIconHref = "/",
  icon = "+",
}) => {
  return (
    <div className="flex flex-col min-w-0 bg-white border border-gray-200 rounded-[0.1875rem] shadow-sm mb-6">
      <div className="px-5 py-3 bg-white border-b border-gray-200 rounded-t-md">
        <div className="flex items-center">
          <div className="flex-1">
            <h4 className="text-[1.414rem] font-normal text-[#39444dcc] leading-[1.5] font-['Oswald','Helvetica Neue','Arial','sans-serif'] mb-3">
              {title}
            </h4>
            <p className="uppercase text-[0.707rem] font-medium text-gray-400 mt-[-0.5rem] mb-0">
              {subtitle}
            </p>
          </div>
          <div className="pl-2.5">
            <a
              href={addIconHref}
              className="inline-flex items-center justify-center px-2 py-1 text-sm font-normal text-gray-800 bg-white border border-gray-200 rounded shadow-sm hover:bg-gray-50"
            >
              <i className="material-icons text-sm leading-none">{icon}</i>
            </a>
          </div>
        </div>
      </div>

      <ul className="flex flex-col pl-0 relative z-0 rounded-b-[calc(0.1875rem-1px)]">
        {threads.map((thread) => (
          <li
            key={thread.id}
            className="relative block p-3 bg-white border border-l-0 border-r-0 border-t-0 border-[#f0f1f2]"
          >
            <div className="flex items-center">
              <div className="pr-2.5 relative">
                <a
                  href={thread.threadUrl || "/"}
                  className="flex items-center justify-center w-[50px] h-[50px] text-[#b8bdc2] border border-[#f0f1f2] rounded-full"
                >
                  <i className="material-icons text-[24px] leading-none align-sub">
                    <MdDescription />
                  </i>
                </a>
                <a
                  href={thread.profileUrl || "/"}
                  className="absolute right-0 -bottom-[5px]"
                >
                  <img
                    src={thread.userImg}
                    alt="user"
                    width={18}
                    className="rounded-full border border-white shadow-sm"
                  />
                </a>
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <a
                    href={thread.profileUrl || "/"}
                    className="text-[#383b3d] no-underline"
                  >
                    <strong className="font-medium">{thread.name}</strong>
                  </a>
                  <small className="ml-auto text-xs text-[#b8bdc2]">
                    {thread.time}
                  </small>
                </div>
                <a
                  href={thread.threadUrl || "/"}
                  className="text-[rgba(56,59,61,0.7)] no-underline"
                >
                  {thread.title || thread.question}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ForumComponent = () => {
  const users = [
    {
      id: 1,
      name: "Luci Bryant",
      points: "1,233",
      image:
        "https://learnplus.demo.frontendmatter.com/assets/images/people/50/guy-1.jpg",
    },
    {
      id: 2,
      name: "Magnus Goldsmith",
      points: "1,230",
      image:
        "https://learnplus.demo.frontendmatter.com/assets/images/people/50/guy-2.jpg",
    },
    {
      id: 3,
      name: "Katelyn Rankin",
      points: "1,190",
      image:
        "https://learnplus.demo.frontendmatter.com/assets/images/people/50/woman-1.jpg",
    },
  ];

  return (
    <div className="p-4 md:p-6 pb-32 md:px-44 bg-gray-100 w-full overflow-y-auto">
      <div className="container-fluid page__container mx-auto px-4 sm:px-5 max-w-full md:max-w-[944px]">
        <ol className="flex flex-wrap gap-2 text-[0.707rem] font-medium uppercase text-gray-400 mb-6 rounded bg-transparent p-0">
          <li className="flex">
            <a
              href="#"
              className="text-[#2196F3] hover:text-blue-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li className="flex pl-2 text-gray-400">Forum</li>
        </ol>

        <div className="flex flex-wrap -mr-0 -ml-0 md:-mr-2 md:-ml-2">
          <div className="relative w-full md:w-2/3 px-0 md:px-2">
            <div className="flex flex-wrap items-center mb-6 gap-4">
              <h1 className="text-[1.999rem] font-normal leading-[1.5] text-[rgba(57,68,77,0.84)] font-[Oswald,'Helvetica Neue',Arial,sans-serif] flex-1 mr-4 mb-0">
                Forum
              </h1>
              <a
                href="#"
                className="inline-flex items-center justify-center text-white bg-red-500 border shadow-sm px-4 py-2 text-[0.9375rem] rounded cursor-pointer transition-all duration-150"
              >
                Ask a Question
              </a>
            </div>

            <div className="flex flex-wrap items-center mb-2 border border-[rgb(240,241,242)] bg-white rounded-full w-full sm:min-w-[200px]">
              <input
                className="w-full h-[calc(1.5em+2px+1rem)] text-[rgb(73,80,87)] text-sm font-normal leading-6 p-[0.5rem_0.75rem] border-[1px] border-transparent bg-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-0"
                type="text"
                placeholder="Search discussions"
              />
              <button
                className="inline-flex items-center justify-center pr-3 text-[rgba(56,59,61,0.4)] text-sm font-normal py-2 px-3 border border-transparent rounded-md bg-transparent cursor-pointer focus:outline-none transition-all"
                type="button"
              >
                <i className="material-icons text-inherit leading-none">
                  search
                </i>
              </button>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <small className="text-[rgba(56,59,61,0.7)] text-xs font-normal uppercase">
                Displaying 10 out of 5,234 discussions
              </small>
              <div className="dropdown ml-auto relative">
                <a
                  className="text-[rgba(56,59,61,0.7)] whitespace-nowrap"
                  href="#"
                >
                  All Topics
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <ForumCard
                title="General"
                subtitle="All non-course topics."
                threads={threads}
              />
              <ForumCard
                title="Lessons"
                subtitle="Course related topics."
                threads={forumThreads}
              />
            </div>

            <nav
              aria-label="Page navigation example"
              className="block overflow-x-auto"
            >
              <ul className="flex justify-center pt-4 list-none rounded text-sm">
                <li className="page-item">
                  <a
                    href="/"
                    aria-label="Previous"
                    className="flex items-center px-2 py-1 text-gray-300 border border-gray-300 bg-transparent cursor-not-allowed rounded-l hover:bg-gray-100"
                  >
                    <span>Prev</span>
                  </a>
                </li>
                <li className="page-item">
                  <a
                    href="/"
                    className="flex items-center px-2 py-1 text-white bg-[#2196F3] border font-medium -ml-px"
                  >
                    <span>1</span>
                  </a>
                </li>
                <li className="page-item">
                  <a
                    href="/"
                    className="flex items-center px-2 py-1 text-blue-600 border border-gray-300 bg-transparent font-medium -ml-px hover:bg-gray-100"
                  >
                    <span>2</span>
                  </a>
                </li>
                <li className="page-item">
                  <a
                    href="/"
                    aria-label="Next"
                    className="flex items-center px-2 py-1 text-[#2196F3] border border-gray-300 bg-transparent font-medium -ml-px rounded-r hover:bg-gray-100"
                  >
                    <span>Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-full md:w-1/3 px-0 md:px-2.5 mt-6 md:mt-0">
            <h4 className="text-[1.414rem] font-normal leading-[1.5] text-[#39444dcc] font-['Oswald','Helvetica Neue','Arial','sans-serif'] mb-4">
              Top Streaks
            </h4>
            <p className="text-[rgba(56,59,61,0.7)] mb-4">
              Participate on discussions on consecutive days to earn your IQ
              streak.
            </p>
            <div className="mb-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center mb-2">
                  <a
                    href="#"
                    className="w-10 h-10 mr-4 inline-block relative text-[rgba(33,150,243,0.85)]"
                  >
                    <img
                      src={user.image}
                      alt="avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </a>
                  <a href="#" className="flex-1 text-[rgb(56,59,61)] mr-2">
                    <strong className="font-medium">{user.name}</strong>
                  </a>
                  <span className="text-[rgba(56,59,61,0.7)] mr-2">
                    {user.points}
                  </span>
                  <i className="material-icons text-[rgb(184,189,194)] text-base leading-none align-sub">
                    opacity
                  </i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumComponent;
