import React from "react";
import "@/app/myComponents/chatUi/ChatUi.css";
export default function chatUi() {
  return (
    <div className="chatUi">
      {/* Title */}
      <div className="chatUi-title">
        <p className="chatUi-title-text1">Pocket Astrologer: </p>
        <p className="chatUi-title-text2">Here for You 24/7</p>
      </div>
      {/* Chat */}
      <div className="chatUi-chat-box">
        <div className="chatUi-ai-chat-box">
          <div className="chatUi-ai-chat-icon"></div>
          <div className="chatUi-ai-chat-text1">
            Welcome to AI studio! How can I help you today?
          </div>
        </div>
        <div className="chatUi-user-chat-box">
          <div className="chatUi-user-chat-text">
            I had a dream about walking through a garden with glowing stars
            falling from the sky. Does that mean anything astrologically?
          </div>
          <div className="chatUi-user-chat-icon"></div>
        </div>
        <div className="chatUi-ai-chat-box">
          <div className="chatUi-ai-chat-icon"></div>
          <div className="chatUi-ai-chat-text">
            What a beautiful dream! Gardens often symbolize growth, and stars
            represent guidance or inspiration. Astrologically, this could be
            your subconscious connecting with your natal Venus or Jupiter,
            planets that influence abundance and creativity.
          </div>
        </div>
        <div className="chatUi-user-chat-box">
          <div className="chatUi-user-chat-text">
            I’ve been thinking about starting a creative project. Could this be
            a sign?
          </div>
          <div className="chatUi-user-chat-icon"></div>
        </div>
        <div className="chatUi-ai-chat-box">
          <div className="chatUi-ai-chat-icon"></div>
          <div className="chatUi-ai-chat-text">
            Absolutely! Check your transits—Venus may be activating your 5th
            house of creativity, or Jupiter could be encouraging expansion. The
            dream aligns perfectly with this energy, suggesting you should move
            forward with your project while the inspiration is fresh.
          </div>
        </div>
        <div className="chatUi-user-chat-box">
          <div className="chatUi-user-chat-text">
            What else can you tell me?
          </div>
          <div className="chatUi-user-chat-icon"></div>
        </div>
        <div className="chatUi-ai-chat-box">
          <div className="chatUi-ai-chat-icon"></div>
          <div className="chatUi-ai-chat-text">
            A lot of things, have a look...
          </div>
        </div>
      </div>
    </div>
  );
}
