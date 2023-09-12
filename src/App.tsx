import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import './Style/style.css'
import React, { Suspense } from 'react';
import { Loading } from './components/Assest/Loading';
const Home = React.lazy(() => wait(100).then(() => import("./Pages/Home")))
const Video = React.lazy(() => wait(100).then(() => import("./Pages/Player/Video")))
const Search = React.lazy(() => wait(100).then(() => import('./Pages/Search')))
const Info = React.lazy(() => wait(100).then(() => import('./Pages/Info')))
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/search/anime/:id" element={<Info />} />
          <Route path='/watch/:id' element={<Video />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
function wait(time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
export default App;

