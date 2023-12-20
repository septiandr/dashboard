import React, { useState } from "react";
import img from "../../assets/img.jpeg";
import img2 from "../../assets/img2.png";
import InputComponent from "./InputChat";

interface Message {
    sender: string;
    receiver: string;
    content: string;
    timestamp: number;
    avatar: string;
}

const messages: Message[] = [
    {
        sender: "John",
        receiver: "Alice",
        content: "Hello Alice, how are you today?",
        timestamp: Date.now(),
        avatar: img,
    },
    {
        sender: "Alice",
        receiver: "John",
        content: "Hi John, I'm doing well, thank you!",
        timestamp: Date.now() + 1000,
        avatar: img2,
    },
    // Dan seterusnya...
];

const Chat: React.FC = () => {
    const [chatMessages, setChatMessages] = useState<Message[]>(messages);

    const handleSendMessage = (message: string, media?: File) => {
        // Logic for sending message goes here
        console.log('Sending message:', message);
        if (media) {
          console.log('Attached media:', media);
        }
      };

    return (
        <div className="flex-1 bg-white rounded-lg p-5">
            <h2 className="font-bold">{messages[0].sender}</h2>
            <div className="chat-container">
                {chatMessages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex h-10 items-center my-5 ${
                            message.sender === "John" ? "justify-start flex-row-reverse"  : "justify-start"
                        }`}
                    >
                        <div className="rounded-full mx-2">
                            <img width={30} src={message.avatar} alt={`${message.sender}'s avatar`} style={{ borderRadius: "50%" }} />
                        </div>
                        <div className={` rounded-lg p-2 ${message.sender === "John" ? "bg-[#535edb] text-white" : "bg-[#f7f6fc]"}`}>
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>
            <InputComponent onSendMessage={handleSendMessage} />

        </div>
    );
};

export default Chat;
