"use client";

import ChatbotUi from "./myComponents/chatbotInterface/ChatbotUi";
import ChatUi from "./myComponents/chatUi/ChatUi";
import "./globals.css";
import "./myComponents/chatbotInterface/ChatbotUi.css";

export default function Home() {
  return (
    <main>
      {/* <ChatbotUi /> */}

      <ChatUi />
    </main>
  );
}
