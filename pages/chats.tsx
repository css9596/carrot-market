import type { NextPage } from "next";

const Chats : NextPage = () => {
    return (
        <div className="py-10 px-4">
            <div className="flex cursor-pointer py-3 border-b items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-slate-300" />
                <div>
                    <p className="text-medium font-medium text-gray-700">Steve Jebs</p>
                    <p className="text-sm font-medium text-gray-500">See you tomorrow in the corner at 2pm!</p>
                </div>
            </div>
        </div>
    );
};

export default Chats;