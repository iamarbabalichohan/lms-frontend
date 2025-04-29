const EditInvoiceComponent = () => {
  return (
    <div className="p-4 sm:p-6 sm:pb-32 sm:px-10 md:px-20 lg:px-44 bg-gray-100 w-full overflow-y-auto">
      <div
        className="mdk-drawer-layout__content page flex-[1_1_0%] relative min-w-[320px] z-0 order-1 overflow-visible h-auto min-h-full pt-6 pb-6 transition-transform duration-200"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <div className="container-fluid page__container w-full mx-auto max-w-[944px] p-0">
          <div className="row flex flex-wrap m-0">
            <div className="col-lg container-fluid page__container relative w-full basis-0 grow mx-auto px-3 sm:px-5 max-w-[944px]">
              <ol className="flex flex-wrap list-none text-[0.707rem] font-medium uppercase text-gray-400 mb-6 mt-0 rounded bg-transparent p-0">
                <li className="flex">
                  <a
                    href="https://learnplus.demo.frontendmatter.com/instructor-dashboard.html"
                    className="text-blue-500/85 no-underline bg-transparent"
                  >
                    Home
                  </a>
                </li>
                <li className="flex text-gray-400 pl-2">Edit Account</li>
              </ol>

              <h1 className="text-[1.999rem] font-normal leading-[1.5] text-[rgba(57,68,77,0.84)] mt-0 mb-4 font-oswald">
                Edit Invoice
              </h1>

              <form style={{ boxSizing: "border-box" }}>
                <div className="relative flex flex-col min-w-0 break-words border border-[#f0f1f2] rounded-[0.1875rem] bg-white shadow-[0px_2px_3px_rgba(56,59,61,0.05)] mb-6">
                  <div className="flex-1 min-h-[1px] p-5">
                    <div className="flex flex-wrap items-center -mx-[5px]">
                      {/* Invoice Number */}
                      <div className="w-full sm:w-1/2 px-[5px]">
                        <div
                          className="mb-0"
                          role="group"
                          aria-labelledby="label-number"
                        >
                          <label
                            id="label-number"
                            htmlFor="number"
                            className="block text-[0.75rem] uppercase font-medium text-[rgba(56,59,61,0.5)] mb-2"
                          >
                            Invoice Number
                          </label>
                          <input
                            id="number"
                            type="text"
                            defaultValue="10003578"
                            placeholder="Invoice number ..."
                            className="block w-full h-[calc(1.5em+1rem+2px)] text-[0.9375rem] font-normal leading-[1.5] text-gray-700 bg-white border border-[#f0f1f2] rounded px-3 py-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)] transition duration-150 ease-in-out"
                          />
                        </div>
                      </div>

                      {/* Invoice Date */}
                      <div className="w-full sm:w-1/2 px-[5px] mt-4 sm:mt-0">
                        <div
                          className="mb-0"
                          role="group"
                          aria-labelledby="label-date"
                        >
                          <label
                            id="label-date"
                            htmlFor="date"
                            className="block text-[0.75rem] uppercase font-medium text-[rgba(56,59,61,0.5)] mb-2"
                          >
                            Invoice Date
                          </label>
                          <input
                            type="hidden"
                            defaultValue="2025-04-22"
                            id="date"
                            className="form-control"
                          />
                          <input
                            type="text"
                            readOnly
                            tabIndex="0"
                            placeholder="Invoice Date"
                            className="block w-full h-[calc(1.5em+1rem+2px)] text-[0.9375rem] font-normal leading-[1.5] text-gray-700 bg-white border border-[#f0f1f2] rounded px-3 py-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)] transition duration-150 ease-in-out cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invoice Items Table */}
                <div className="card w-full overflow-x-auto relative flex flex-col min-w-0 break-words border border-gray-200 rounded bg-white shadow-sm mb-4">
                  <div className="min-w-[500px] sm:min-w-0">
                    <table className="table mb-0 w-full text-gray-800 shadow-md">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="uppercase text-xs font-medium text-gray-400 py-2 px-3 w-6 align-middle">
                            <div className="relative z-[1] min-h-[1.40625rem] pl-6">
                              <input
                                id="customCheckAll"
                                type="checkbox"
                                className="absolute w-4 h-5 opacity-0 left-0 js-toggle-check-all"
                              />
                              <label
                                htmlFor="customCheckAll"
                                className="inline-block align-top"
                              >
                                <span className="sr-only">Toggle all</span>
                              </label>
                            </div>
                          </th>
                          <th className="uppercase text-xs font-medium text-gray-400 py-2 px-3 align-middle">
                            Description
                          </th>
                          <th className="uppercase text-xs font-medium text-gray-400 py-2 px-3 text-right w-28 align-middle">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="align-middle py-2 px-3 border-t border-gray-200">
                            <div className="relative z-[1] min-h-[1.40625rem] pl-6">
                              <input
                                id="customCheck1_1"
                                type="checkbox"
                                className="absolute w-4 h-5 opacity-0 left-0 js-check-selected-row"
                              />
                              <label
                                htmlFor="customCheck1_1"
                                className="inline-block align-top"
                              >
                                <span className="sr-only">Check</span>
                              </label>
                            </div>
                          </td>
                          <td className="align-middle py-2 px-3 border-t border-gray-200">
                            <div className="flex items-center">
                              <a
                                href="https://learnplus.demo.frontendmatter.com/instructor-view-course.html"
                                className="w-16 h-10 mr-4 inline-block relative z-0 text-blue-500"
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
                                  className="text-gray-800 font-medium"
                                >
                                  Learn Angular Fundamentals
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="text-right py-2 px-3 border-t border-gray-200 align-middle">
                            <strong className="font-medium">$89.00 USD</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table className="table mb-0 w-full text-gray-800">
                      <tfoot>
                        <tr>
                          <td className="align-middle py-2 px-3 border-t border-gray-200 w-6">
                            <div className="relative z-[1] min-h-[1.40625rem] pl-6">
                              <input
                                id="customCheck1_new"
                                type="checkbox"
                                className="absolute w-4 h-5 opacity-0 left-0 js-check-selected-row"
                              />
                              <label
                                htmlFor="customCheck1_new"
                                className="inline-block align-top"
                              >
                                <span className="sr-only">Check</span>
                              </label>
                            </div>
                          </td>
                          <td className="align-middle py-2 px-3 border-t border-gray-200">
                            <input
                              type="text"
                              placeholder="Enter item ..."
                              className="w-full h-[2.625rem] text-sm font-normal text-gray-700 bg-transparent border-0 border-b border-gray-200 focus:ring-0 focus:outline-none"
                            />
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {/* Summary & Discount */}
                <div className="relative flex flex-col sm:flex-row gap-6 min-w-0 break-words bg-white border border-gray-200 rounded shadow-sm mb-6 p-5">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="discount"
                      className="block text-[0.75rem] font-medium uppercase text-gray-500 mb-2"
                    >
                      Discount
                    </label>
                    <input
                      id="discount"
                      type="text"
                      defaultValue="5.00"
                      placeholder="Enter amount i.e. 12.5% or 12.50"
                      className="block w-full h-[2.625rem] text-sm font-normal text-gray-700 bg-white border border-gray-200 rounded px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <small className="block mt-1 text-xs font-normal text-gray-400">
                      Enter amount i.e. 12.5% or 12.50
                    </small>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <table className="w-full text-gray-700">
                      <tfoot>
                        <tr>
                          <td className="text-right py-2 px-3 text-gray-500 font-medium border-t border-gray-200">
                            Subtotal
                          </td>
                          <td className="text-right py-2 px-3 font-medium border-t border-gray-200 w-[120px]">
                            $89.00 USD
                          </td>
                        </tr>
                        <tr>
                          <td className="text-right py-2 px-3 text-gray-500 font-medium border-t border-gray-200">
                            Discount
                          </td>
                          <td className="text-right py-2 px-3 font-medium border-t border-gray-200 w-[120px]">
                            -$5.00 USD
                          </td>
                        </tr>
                        <tr>
                          <td className="text-right py-2 px-3 text-gray-500 font-medium border-t border-gray-200">
                            Total
                          </td>
                          <td className="text-right py-2 px-3 font-medium border-t border-gray-200 w-[120px]">
                            $84.00 USD
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </form>
            </div>

            {/* Sticky Sidebar Navigation */}
            <div
              id="page-nav"
              className="hidden lg:block col-lg-auto sticky top-16 overflow-y-auto w-[240px] max-h-[calc(100vh-4rem)]"
            >
              <div className="overflow-hidden touch-auto">
                <div className="pt-8">
                  <nav className="flex flex-col mb-4 ml-[21px] pl-0 list-none relative">
                    <a
                      href="/Instructor-Invoice"
                      className="relative block text-[rgba(56,59,61,0.7)] mb-2 pl-[30px] no-underline bg-transparent before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400 after:content-[''] after:absolute after:left-[3px] after:top-[12px] after:w-px after:h-[calc(100%+0.5rem)] after:bg-gray-300"
                    >
                      View Invoice
                    </a>
                    <a
                      href="/Edit-Invoice"
                      className="relative block text-[rgba(56,59,61,0.7)] mb-2 pl-[30px] no-underline bg-transparent font-bold before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-blue-500 after:content-[''] after:absolute after:left-[3px] after:top-[12px] after:w-px after:h-[calc(100%+0.5rem)] after:bg-gray-300"
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
                  <div className="ml-[21px] pl-[17px]">
                    <button className="inline-flex items-center justify-center px-4 py-2 text-white text-sm font-normal bg-red-500 border border-red-500 rounded shadow-sm hover:bg-red-600 transition">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditInvoiceComponent;
