import React from 'react';
import './RuleDescription.css'

const RuleDescription = () => {
    return (
        <div className="">
            <div className="">
                <header className=" bg-gray-900 navbar    max-w-[1080] mx-auto py-4">
                    <div className="wrapper ">

                        <div className="flex-1  ">

                            <button className=" btn btn-square btn-ghost text-3xl lg:pl-5 md:pl-5  pl-1 font-bold">
                                <a className="text-white" href="b"><i className="fa-solid fa-angle-left"></i></a>
                            </button>
                        </div>

                        <div className="flex-none">
                            <h1 href className="lg:pr-5 md:pr-5  uppercase text-base md:text-2xl lg:text-3xl  font-bold text-white">Rules Description</h1>
                        </div>


                    </div>
                </header>

                <div className="pt-28  about-container banner-area text-center font-bold h-40 lg:h-96 md:h-96 ">
                    {/* about-container */}
                    <h2 className="lg:text-5xl text-xl md:text-4xl ">Description about SHEIN</h2>
                </div>

                <div className="bg-slate-800 content-area p-5 ">
                    <div className="container mx-auto max-w-[1080] ">

                        <section >
                            <div className="my-5 collapse rounded-lg shadow-lg ">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-gray-900 text-white peer-checked:bg-gray-900 peer-checked:text-secondary-white py-5 ">

                                        <h2 className="font-bold text-dark text-2xl">
                                            About deposit
                                        </h2>
                                        
                                   

                                </div>
                                <div className="collapse-content bg-gray-900 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                                    <p className="text-gray-500 text-justify  p-5">
                                        Since SHEIN members come from many different countries and use different currencies, SHEIN uses cryptocurrency transactions to simplify transactions. Please check SHEIN's USDT address carefully before recharging (the platform recharge address can be changed at any time, and users must go to the platform to obtain the latest recharge address before recharging). If you have any questions, please contact customer service.
                                    </p>
                                </div>
                            </div>


                            <div className="my-5 collapse rounded-lg shadow-lg ">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-gray-900 text-white peer-checked:bg-gray-900 peer-checked:text-secondary-white">
                                    <h2 className="font-bold text-dark text-2xl">

                                        About order amount

                                    </h2>

                                </div>
                                <div className="collapse-content bg-gray-900 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                                    <p className="text-gray-500 text-justify   p-5">

                                        The order amount paid by SHEIN members is determined by the member’s account balance, access to orders, and markets conditions on the day. The maximum number of orders each account can send per day depends on your user level.

                                    </p>
                                </div>
                            </div>


                            <div className="my-5 collapse rounded-lg shadow-lg ">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-gray-900 text-white peer-checked:bg-gray-900 peer-checked:text-secondary-white">
                                    <h2 className="font-bold text-dark text-2xl">
                                        About order-grab commission
                                    </h2>
                                </div>
                                <div className="collapse-content bg-gray-900 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">

                                    <div className=' rounded-md my-6 shadow-md md:mx-5 lg:mx-10   p-5'>
                                        <div className="overflow-x-auto">
                                            <table className="table w-full ">

                                                <thead>
                                                    <tr className="font-bold">

                                                        <th className=" pl-5">Level</th>
                                                        <th>Percentage</th>
                                                        <th>About order-grab commission</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr className="hover">

                                                        <td className=" pl-5">VIP1</td>
                                                        <td>76 <sup><i className="fa-solid fa-percent"></i></sup> </td>
                                                        <td>60</td>

                                                    </tr>

                                                    <tr className="hover">

                                                        <td className=" pl-5">VIP1 </td>
                                                        <td>76 <sup><i className="fa-solid fa-percent"></i></sup> </td>
                                                        <td>60</td>
                                                    </tr>

                                                    <tr className="hover">

                                                        <td className=" pl-5">VIP1</td>
                                                        <td>76 <sup><i className="fa-solid fa-percent"></i></sup> </td>
                                                        <td>60</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="my-5 collapse rounded-lg shadow-lg ">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-gray-900 text-white peer-checked:bg-gray-900 peer-checked:text-secondary-white">
                                    <h2 className="font-bold text-dark text-2xl">
                                        About withdrawal
                                    </h2>

                                </div>
                                <div className="collapse-content bg-gray-900 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                                    <ul className="text-gray-500 text-justify   p-5">
                                        <li><i className="fa-solid fa-circle-check"></i> The withdrawal time of SHEIN is usually within 24 hours, and the service fee for each withdrawal will be charged a certain fee by the cryptocurrency system.</li>
                                        <li><i className="fa-solid fa-circle-check"></i> In order to avoid frequent payment and cause SHEIN to incur additional taxes, the minimum withdrawal amount is 1 USDT</li>
                                    </ul>

                                    <div className="mt-8 mb-5 p-6 mx-auto lg:w-5/6  text-base alert alert-success shadow-xl font-bold  text-dark   ">
                                        <div>

                                            <p> <i className="fa-solid fa-circle-info mr-2"></i>
                                                ※ At the request of relevant departments, in order to prevent members from being suspected of money laundering and other illegal activities, SHEIN members need to complete the order volume corresponding to the user level every day before they can withdraw.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="my-5 collapse rounded-lg shadow-lg ">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-gray-900 text-white peer-checked:bg-gray-900 peer-checked:text-secondary-white">
                                    <h2 className="font-bold text-dark text-2xl">
                                        About level requirements
                                    </h2>

                                </div>
                                <div className="collapse-content bg-gray-900 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                                    <p className="text-gray-500 text-justify    p-5">

                                        You can increase your user level by completing various metrics. Please refer to the current level progress, benefits and upgrade conditions for each level.
                                        <span><a href="r" className="ml-3   font-bold link link-primary"> VIP</a> </span>
                                    </p>
                                </div>
                            </div>


                            <div className="my-5 collapse rounded-lg shadow-lg ">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-gray-900 text-white peer-checked:bg-gray-900 peer-checked:text-secondary-white">
                                    <h2 className="font-bold text-dark text-2xl">Disclaimer</h2>

                                </div>
                                <div className="collapse-content bg-gray-900 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                                    <ul className="text-gray-500 text-justify    p-5">
                                        <li><i className="fa-solid fa-circle-check"></i> The terms and conditions contained herein may be changed or modified at any time. Your continued participation in the program means that you accept any changes or modifications to these terms and conditions..</li>
                                        <li><i className="fa-solid fa-circle-check"></i> In the event of fraud or other related behaviors, including but not limited to the above examples, SHEIN reserves the right to warn or freeze your account.</li>

                                        <li><i className="fa-solid fa-circle-check"></i> The final interpretation of the above rules belongs to SHEIN, and reserves the right to adjust and change</li>
                                    </ul>
                                </div>
                            </div>

                        </section>

                        <section>
                            <div className="card shadow-lg rounded-lg w-full my-14 bg-gray-900 text-neutral-content">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title fw-bold text-2xl">See More Instructions!</h2>
                                    <div className="flex flex-col w-full border-opacity-400 ">

                                        <div className="divider shadow-lg"></div>

                                    </div>
                                    <a href="r" className="link link-primary">About us</a>
                                    <a href="r" className="link link-secondary">Promotion description</a>
                                    <a href="r" className="link link-primary">Back to Homepage</a>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default RuleDescription;