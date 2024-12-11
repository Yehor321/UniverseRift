import "./news.css"

export default function News() {
    return (
      <div className="News__Main">


        <div className="News__card">
          <iframe className="News__card_Post" src="https://www.youtube.com/embed/KQWK92jEnkU?si=waXsk_7G9AauefMS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="News__card_contend">
            <p>06.12.2024</p>
            <h1>🎥 We’ve Released Our First Visual Trailer!</h1>
            <p>The Universe Rift journey is just beginning, and we’re thrilled to share our very first visual trailer with you! ✨ Dive into the steampunk magic, floating islands, and epic adventures that await.</p>
          </div>
        </div>
      </div>
    );
  }

  