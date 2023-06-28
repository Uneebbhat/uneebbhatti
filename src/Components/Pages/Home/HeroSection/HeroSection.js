import React from 'react';
import "./HeroSection.css"

export  function HeroSection() {
    return (
        <>
            <section className="main-section">
                <main className="main-wrapper">
                    <div className="content">
                        <div className="heading">
                            <h1>Hi <span className='waving-emoji'>👋</span>, I am Uneeb</h1>
                        </div>
                        <div className="para">
                            <p>Ready to elevate your online presence? Let's collaborate and bring your ideas to life.</p>
                        </div>
                        <div className="button">
                            <button className="btn">Launch your vision</button>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}