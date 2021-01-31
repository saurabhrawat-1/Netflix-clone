import React from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./requests";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row
        title="Documentary Movies"
        fetchUrl={requests.fetchDocumentaryMovies}
      />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Science And Fiction Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvMovies} />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
      <Row title="Western Movies" fetchUrl={requests.fetchWesternMovies} />

      <Footer />
    </div>
  );
}

export default App;
