import React from 'react';
import './App.css';
import Row from './components/MoviesRow'
import apiRequest from './apiRequest';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
    return ( 
        <div className="app" >
            <Nav />
            <Banner />
            <Row 
                title='NETFLIX ORIGINALS' 
                fetchUrl={apiRequest.fetchNetflixOriginals} 
                originalsRow={true}
                />
            <Row title='Trending' fetchUrl={apiRequest.fetchTrending} />
            <Row title='Top Rated' fetchUrl={apiRequest.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={apiRequest.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={apiRequest.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={apiRequest.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchUrl={apiRequest.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={apiRequest.fetchDocumentaries} />
        </div>
    );
}

export default App;