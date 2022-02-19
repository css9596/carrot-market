import type {NextPage} from 'next';
import {useState} from "react";

const Home: NextPage = () => {
    const [dark, setDark] = useState(false);
    const isDark = () => {
        setDark(!dark);
    }
    return (
        <div className={(dark ? "dark" : "")}>
            <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
                <button className="" onClick={isDark}>{!dark? "다크모드" : "다크모드 해제"}</button>
                <div className="bg-white dark:bg-black flex flex-col p-6 rounded-3xl shadow-xl">
                    <span className="font-semibold text-2xl dark:text-white">Select Item</span>
                    <div className="flex justify-between my-2">
                        <span className="text-gray-50 dark:text-gray-100">Grey Chair</span>
                        <span className="font-semibold dark:text-white">$19</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
                        <span className="font-semibold dark:text-white">$19</span>
                    </div>
                    <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                        <span>Total</span>
                        <span className="font-semibold">$10</span>
                    </div>
                    <button
                        className="mt-5 bg-blue-500 text-white p-3
                        dark:bg-black dark:text-white dark:border-white dark:border
                        text-center rounded-xl w-3/4 block mx-auto
                        dark:hover:bg-white hover:bg-teal-500 hover:text-black
                        active:bg-yellow-500 focus:text-red-500">Checkout
                    </button>
                </div>
                <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
                    <div className="bg-blue-500 p-6 pb-14 xl:pb-52">
                        <span className="text-white text-2xl pb-14">Profile</span>
                    </div>
                    <div className="rounded-3xl p-6 bg-white relative -top-5">
                        <div className="flex relative -top-16 items-end justify-between">
                            <div className="flex flex-col items-center">
                                <span className="text-sm text-gray-500">Orders</span>
                                <span className="font-medium">340</span>
                            </div>
                            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-300 transition-colors">

                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-sm text-gray-500">Spent</span>
                                <span className="font-medium">$340</span>
                            </div>
                        </div>
                        <div className="relative mt-5 flex flex-col items-center -mt-10 -mb-5">
                            <span className="text-lg font-medium">Tony Molloy</span>
                            <span className="text-sm text-gray-500">미국</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
                <div className="flex mb-5 justify-between items-center">
                    <span>⬅️</span>
                    <div className="space-x-3">
                        <span>⭐️ 4.9</span>
                        <span className="shadow-xl p-2 rounded-md">💖</span>
                    </div>
                </div>
                <div className="bg-zinc-400 h-72 mb-5" />
                <div className="flex flex-col">
                    <span className="font-medium text-xl">Swoon Lounge</span>
                    <span className="text-xs text-gray-500">Chair</span>
                    <div className="mt-3 mb-5 flex justify-between items-center">
                        <div className="space-x-2">
                            <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
                            <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
                            <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
                        </div>
                        <div className="flex items-center space-x-5">
                            <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                                -
                            </button>
                            <span>1</span>
                            <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-2xl">$450</span>
                        <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;