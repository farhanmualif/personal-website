"use client";

import React, { useState, useRef, useEffect } from "react";

const Footer = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const chatboxRef = useRef<HTMLElement | null>(null);

  const toggleChatbox = () => {
    setIsChatboxOpen((prev) => !prev);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      addUserMessage(userInput);
      respondToUser(userInput);
      setUserInput("");
    }
  };

  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const addUserMessage = (message: any) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2", "text-right");
    messageElement.innerHTML = `<p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
    if (chatboxRef.current) {
      chatboxRef.current.appendChild(messageElement);
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  const addBotMessage = (message: any) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2");
    messageElement.innerHTML = `<p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
    if (chatboxRef.current) {
      chatboxRef.current.appendChild(messageElement);
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  const respondToUser = (message: string) => {
    // Replace this with your chatbot logic
    setTimeout(() => {
      addBotMessage("This is a response from the chatbot.");
    }, 500);
  };

  const handleCloseChatbox = () => {
    setIsChatboxOpen(false);
  };

  useEffect(() => {
    // Automatically open the chatbox on component mount
    setIsChatboxOpen(true);
  }, []);

  return (
    <div>
      <div className="fixed bottom-0 right-0 mb-5 mr-4">
        <button
          id="open-chat"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
          onClick={toggleChatbox}>
          <svg
            xmlns=" http://www.w3.org/2000/svg"
            width="35"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white block border-gray-200 align-middle">
            <path
              d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
              className="border-gray-200"></path>
          </svg>
        </button>
      </div>
      <div
        id="chat-container"
        className={`fixed bottom-20 mb-5 right-4 w-80 ${
          isChatboxOpen ? "" : "hidden"
        }`}>
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
            <button
              id="close-chat"
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={handleCloseChatbox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div id="chatbox" className="p-4 h-80 overflow-y-auto">
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                hello
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                this example of chat
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                design with tailwind
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
          </div>
          <div className="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              id="send-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="border-t">
          <div className="container mx-auto px-6">
            <div className="md:flex justify-between items-center text-sm">
              <div className="text-center md:text-left py-3 md:py-4  md:ml-1 border-b md:border-b-0">
                <a href="#" className="no-underline text-grey-dark mr-4">
                  Home
                </a>
                <a href="#" className="no-underline text-grey-dark mr-4">
                  Careers
                </a>
                <a href="#" className="no-underline text-grey-dark">
                  Legal &amp; Privacy
                </a>
              </div>
              <div className="md:flex md:flex-row-reverse items-center py-4">
                <div className="text-center mb-4 md:mb-0 md:flex">
                  <div className="w-48 inline-flex relative mb-4 md:mb-0 md:mr-4 items-center">
                    <select className="leading-tight block appearance-none w-full bg-white border border-grey-light px-3 py-2 pr-8 rounded">
                      <option>Indonesia</option>
                      <option>English</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 flex items-center px-2 text-grey">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block leading-tight bg-blue-600 border border-blue-dark hover:bg-blue-700 px-3 py-2 text-white no-underline rounded">
                      Need help?
                    </a>
                  </div>
                </div>
                <div className="text-grey text-center md:mr-4">
                  &copy; 2023 Jii4Tech
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
