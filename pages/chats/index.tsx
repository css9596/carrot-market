import type { NextPage } from "next";

const Index : NextPage = () => {
    return (
        <div className="py-10 divide-y-[1px]">
                {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="flex px-4 cursor-pointer py-3 items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-slate-300" />
                        <div>
                            <p className="font-medium text-gray-700">Steve Jebs</p>
                            <p className="text-sm text-gray-500">See you tomorrow in the corner at 2pm!</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Index;