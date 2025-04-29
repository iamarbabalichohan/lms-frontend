const InstructorInvoice = () => {
  return (
    <div className="p-4 sm:pb-32 sm:px-44 bg-gray-100 w-full overflow-y-auto">
      <div className="flex flex-col lg:flex-row m-0">
        <div className="relative w-full flex-grow mx-auto px-2 sm:px-5 max-w-full sm:max-w-[944px]">
          <ol className="breadcrumb pt-2 flex flex-wrap uppercase text-[0.707rem] font-medium text-[rgb(184,189,194)] mt-0 mb-6 p-0 bg-transparent rounded">
            <li className="breadcrumb-item flex">
              <a
                href="https://learnplus.demo.frontendmatter.com/instructor-dashboard.html"
                className="text-[rgba(33,150,243,0.85)] no-underline bg-transparent"
              >
                Home /
              </a>
            </li>
            <li className="breadcrumb-item active flex text-[rgb(184,189,194)] pl-2">
              Edit Account
            </li>
          </ol>

          <div id="invoice">
            <div className="card relative flex flex-col min-w-0 break-words border border-[#f0f1f2] rounded-[0.1875rem] bg-white shadow-[0_2px_3px_rgba(56,59,61,0.05)] mb-6">
              <div className="card-header flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-5 py-3 border-b border-[#f0f1f2] bg-white rounded-t-[calc(0.1875rem-1px)]">
                <div className="flex-1">
                  <h1 className="text-[1.999rem] leading-[1.5] font-[400] text-[rgba(57,68,77,0.84)] font-oswald mb-3 mt-0">
                    Invoice
                  </h1>
                  <div className="uppercase text-[0.707rem] font-medium text-[#b8bdc2] mt-[-0.5rem]">
                    Document 10003578 / 12 Jan 2019
                  </div>
                </div>

                <div className="pl-0 sm:pl-2 flex items-center mt-4 sm:mt-0">
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center font-normal text-center no-underline text-[#b8bdc2] bg-transparent border-none shadow-none text-[0.9375rem] cursor-pointer d-print-none"
                  >
                    <i className="material-icons text-[1.5rem] align-sub">
                      print
                    </i>
                  </a>
                </div>
              </div>

              <div className="card-body px-4 sm:p-5">
                <div className="-mx-2.5 flex flex-wrap">
                  <div className="w-full sm:w-1/2 px-2.5 mb-4 sm:mb-0">
                    <p className="text-[rgba(56,59,61,0.7)] m-0 font-medium">
                      Prepared for
                    </p>
                    <h2 className="text-[1.999rem] leading-[1.5] font-[400] text-[rgba(57,68,77,0.84)] font-oswald mb-4 mt-0">
                      Alexander Watson
                    </h2>
                    <div className="text-[rgba(56,59,61,0.5)]">
                      640 Joy Bypass Suite 448
                      <br />
                      Germany
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 px-2.5">
                    <p className="text-[rgba(56,59,61,0.7)] m-0 font-medium">
                      Prepared by
                    </p>
                    <h2 className="text-[1.999rem] leading-[1.5] font-[400] text-[rgba(57,68,77,0.84)] font-oswald mb-4 mt-0">
                      LearnPlus Inc.
                    </h2>
                    <div className="text-[rgba(56,59,61,0.5)]">
                      32 Noah Cliffs Suite 626, Romania
                      <br />
                      Tax ID RO18880609
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card table-responsive bg-white overflow-x-auto mb-6">
            <table className="w-full text-gray-800 shadow-md mb-0 border-collapse min-w-[500px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left uppercase text-xs font-medium text-gray-400 py-2 px-3 border-b-2 border-gray-200">
                    Description
                  </th>
                  <th className="text-right uppercase text-xs font-medium text-gray-400 py-2 px-3 border-b-2 border-gray-200 w-[120px]">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="align-middle leading-tight py-2 px-3 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                      <a
                        href="https://learnplus.demo.frontendmatter.com/instructor-view-course.html"
                        className="block h-10 w-16 mr-0 sm:mr-4 mb-2 sm:mb-0"
                      >
                        <img
                          src="https://learnplus.demo.frontendmatter.com/assets/images/gulp.png"
                          alt="Learn Angular Fundamentals"
                          className="w-full h-full object-cover rounded"
                        />
                      </a>
                      <div className="flex-1">
                        <a
                          href="https://learnplus.demo.frontendmatter.com/instructor-view-course.html"
                          className="text-gray-800 font-medium hover:underline"
                        >
                          Learn Angular Fundamentals
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-right align-middle leading-tight py-2 px-3 border-t border-gray-200">
                    <strong>$89.00 USD</strong>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle leading-tight py-2 px-3 border-t border-gray-200">
                    <p className="mb-1 font-medium">
                      Basic Plan - Monthly Subscription
                    </p>
                    <p className="text-sm text-gray-500 m-0">
                      For the period of June 20, 2018 to July 20, 2018
                    </p>
                  </td>
                  <td className="text-right align-middle leading-tight py-2 px-3 border-t border-gray-200">
                    <strong>$9.00 USD</strong>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle leading-tight py-2 px-3 border-t border-gray-200">
                    <strong>Credit discount</strong>
                  </td>
                  <td className="text-right align-middle leading-tight py-2 px-3 border-t border-gray-200">
                    <strong>-$5.00 USD</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-gray-800 border-collapse mb-0 min-w-[500px]">
              <tfoot>
                <tr>
                  <td className="text-right text-gray-600 py-2 px-3 border-t border-gray-200 align-top">
                    <strong className="font-medium">Subtotal</strong>
                  </td>
                  <td className="text-right py-2 px-3 border-t border-gray-200 w-[120px] align-top">
                    <strong className="font-medium">$89.00 USD</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-right text-gray-600 py-2 px-3 border-t border-gray-200 align-top">
                    <strong className="font-medium">Total</strong>
                  </td>
                  <td className="text-right py-2 px-3 border-t border-gray-200 w-[120px] align-top">
                    <strong className="font-medium">$89.00 USD</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="px-4 sm:px-4 mb-6">
            <p className="text-gray-600 mb-2">
              <strong className="font-medium">Invoice paid</strong>
            </p>
            <div className="flex flex-col sm:flex-row">
              <div className="mr-0 sm:mr-4 mb-2 sm:mb-0">
                <img
                  width={38}
                  alt="visa"
                  src="https://learnplus.demo.frontendmatter.com/assets/images/visa.svg"
                  className="align-middle"
                />
              </div>
              <div className="flex-1 text-gray-500">
                You don’t need to take further action. Your credit card Visa
                ending in 2819 has been charged on January 12, 2019.
              </div>
            </div>
          </div>
        </div>

        <div
          id="page-nav"
          className="hidden lg:block col-lg-auto page-nav sticky top- max-h-[calc(100vh-4rem)] overflow-y-auto w-full lg:w-[240px] z-0 mt-8 lg:mt-0"
        >
          <div className="ps overflow-hidden touch-auto">
            <div className="page-section pt-8 lg:">
              <nav className="flex flex-col mb-4 ml-[21px] pl-0 list-none relative">
                <a
                  href="/Instructor-Invoice"
                  className="relative block text-[rgba(56,59,61,0.7)] mb-2 pl-[30px] no-underline bg-transparent font-bold before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-[#2196F3] after:content-[''] after:absolute after:left-[3px] after:top-[12px] after:w-px after:h-[calc(100%+0.5rem)] after:bg-gray-300"
                >
                  View Invoice
                </a>
                <a
                  href="/Edit-Invoice"
                  className="relative block text-[rgba(56,59,61,0.7)] mb-2 pl-[30px] no-underline bg-transparent before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400 after:content-[''] after:absolute after:left-[3px] after:top-[12px] after:w-px after:h-[calc(100%+0.5rem)] after:bg-gray-300"
                >
                  Edit Invoice
                </a>
                <a
                  href="/"
                  className="relative block text-[rgba(56,59,61,0.7)] mb-2 pl-[30px] no-underline bg-transparent cursor-default pointer-events-none before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400"
                >
                  Invoice Settings
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstructorInvoice;
