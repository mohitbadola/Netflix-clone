import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div>
    <Main />
    <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        <Row rowID='6' title='Action' fetchURL={requests.requestActionMovies}/>
        <Row rowID='7' title='Romance' fetchURL={requests.requestRomanceMovies}/>
        <Row rowID='8' title='Comedy' fetchURL={requests.requestComedyMovies}/>
        <Row rowID='9' title='Documentaries' fetchURL={requests.requestDocumentaries}/> 
        <Row rowID='10' title='Netflix Originals' fetchURL={requests.requestNetflixOriginals}/>
    </div>
  )
}

export default Home;
