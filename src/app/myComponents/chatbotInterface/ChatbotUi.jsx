import React from 'react';
import './ChatbotUi.css';

const AstrologyLanding = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="logo">✦ Astrobate</div>

                    <h1 className="hero-title">
                        Your Personal Astrology<br />
                        Guide. Anytime, anywhere!
                    </h1>

                    <p className="hero-subtitle">
                        Discover the stars’ secrets, understand your journey, and find <br />cosmic clarity with AstroChat – your pocket astrologer.
                    </p>

                    <button className="cta-button">
                        Get Your Free Horoscope Today →
                    </button>
                </div>

                <div className="hero-image">
                    <div className="phone-preview">
                        {/* Phone mockup placeholder */}
                        <div className="preview-card">
                            <div className="card-label">Welcome to</div>
                            <div className="card-title">Your personal astrology guide</div>
                        </div>
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stats-number">5,000,000+</div>
                    <p className="stats-text">
                        Join millions who trust Stellara for daily<br />
                        guidance, compatibility insights, and more.
                    </p>
                </div>
            </section>

            {/* Chat Section */}
            <section className="chat-section">
                <div className="section-header">
                    <h2 className="section-title">
                        Pocket Astrologer:<br />
                        Here for You 24/7
                    </h2>
                </div>

                <div className="chat-demo">
                    <div className="chat-message bot">
                        <div className="message-dot"></div>
                        <div className="message-content">
                            <p>Welcome to Stellara! How can I help you today?</p>
                        </div>
                    </div>

                    <div className="chat-message user">
                        <div className="message-dot"></div>
                        <div className="message-content">
                            <p>I had a dream about soaring through a fight/break with someone I've been together with for 5 years. How much can someone change?</p>
                        </div>
                    </div>

                    <div className="chat-message bot">
                        <div className="message-dot"></div>
                        <div className="message-content">
                            <p>What a beautiful dream! Dreams of soaring or flight, especially involving loved ones, often reflect your inner thoughts, emotions, and experiences.</p>
                        </div>
                    </div>

                    <div className="chat-message user">
                        <div className="message-dot"></div>
                        <div className="message-content">
                            <p>I've been thinking about starting a wellness project. Could this be a sign?</p>
                        </div>
                    </div>

                    <div className="chat-message bot">
                        <div className="message-dot"></div>
                        <div className="message-content">
                            <p>Absolutely! Check your intuition—taking time for yourself and your wellbeing is always important.</p>
                        </div>
                    </div>

                    <div className="chat-message user">
                        <div className="message-dot"></div>
                        <div className="message-content">
                            <p>What else can you tell me?</p>
                        </div>
                    </div>

                    <div className="sparkle-icon">✦</div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3 className="feature-title">Personalized<br />Horoscopes</h3>
                        <p className="feature-text">
                            Receive daily, weekly, and monthly horoscopes tailored to your unique astrological profile.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">❤️</div>
                        <h3 className="feature-title">Compatibility<br />Insights</h3>
                        <p className="feature-text">
                            Discover how you connect with others based on your astrological signs.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <h3 className="feature-title">Get your<br />Numerology</h3>
                        <p className="feature-text">
                            Uncover the hidden meanings behind numbers in your life.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">⭐</div>
                        <h3 className="feature-title">Personalized<br />Horoscopes</h3>
                        <p className="feature-text">
                            Get insights into your personality, strengths, and life path.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2024 Stellara. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AstrologyLanding;