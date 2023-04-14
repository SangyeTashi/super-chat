import React, { useEffect, useRef } from 'react';

type MessageBubbleProps = {
    text: string;
    isLatest: boolean;
};

const MessageBubbleSender: React.FC<MessageBubbleProps> = ({
    text,
    isLatest = false,
}) => {
    const messageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        isLatest && messageRef.current?.scrollIntoView();
    }, [isLatest]);
    return (
        <div
            ref={messageRef}
            className="py-2 px-3 rounded-2xl self-end bg-green_accent_dark text-white max-w-md "
        >
            {text}
        </div>
    );
};
export default MessageBubbleSender;
