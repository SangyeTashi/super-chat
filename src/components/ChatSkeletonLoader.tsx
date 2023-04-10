import React from 'react';

const ChatSkeletonLoader = () => {
    return (
        <div className="animate-pulse w-full p-4 flex flex-col space-y-4 overflow-hidden">
            <div className="w-[30rem] rounded-xl sm:max-w-xl h-16 bg-tertiary_dark"></div>
            <div className="w-[25rem] rounded-xl sm:max-w-xl h-11 bg-tertiary_dark"></div>
            <div className="w-[20rem] self-end rounded-xl sm:max-w-xl h-11 bg-tertiary_dark"></div>
            <div className="w-[28rem] self-end rounded-xl sm:max-w-xl h-11 bg-tertiary_dark"></div>
            <div className="w-[15rem] rounded-xl sm:max-w-xl self-end h-11 bg-tertiary_dark"></div>
            <div className="w-[30rem] rounded-xl sm:max-w-xl  h-11 bg-tertiary_dark"></div>
            <div className="w-[28rem] self-end rounded-xl sm:max-w-xl h-16 bg-tertiary_dark"></div>
            <div className="w-[15rem] rounded-xl sm:max-w-xl h-11 bg-tertiary_dark"></div>
            <div className="w-[30rem] rounded-xl sm:max-w-xl h-11 bg-tertiary_dark"></div>
        </div>
    );
};
export default ChatSkeletonLoader;
