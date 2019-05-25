import React from 'react';
import axios from 'axios';
// import fetch from 'isomorphic-fetch'
// import { Ul } from '../GridContainer'
import Faces from './Faces'

axios.defaults.baseURL = 'http://localhost:3000/api'



class FacesList extends React.Component {
  state = {
    ready: 'initial',
    faces: [],
    _page: 1,
    _limit: 15,
    totalpages: null,
    scrolling: false,
    advert: ''
  };

  componentWillMount() {
    this.loadFaces()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
    this.setState({
      ready: 'loading',
    });
  }

  //As i scroll load more faces and change ad
  handleScroll = (e) => {
    e.preventDefault();
    const { scrolling, totalpages, _page } = this.state
    if (scrolling) return
    if (_page == totalpages) return
    const Lastli = document.querySelector('ul.face-grid > li:last-child')
    let LastliOffset = Lastli.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;
    var bottomOffset = 600;
    if (pageOffset > LastliOffset - bottomOffset) {this.loadMoreFaces(e)}
    // console.log(bottomOffset);
  }

  debugger
  //loads faces
  loadFaces = () => {
    const { _page, _limit, faces} = this.state;
    const url = `/products?_page=${_page}&_limit=${_limit}`
    axios.get(url)
      .then(res => res).then(data => {
        console.log(data)
        this.setState({
          ready: 'loaded',
          faces: [...faces, ...data.data],
          scrolling: false,
          totalpages: faces.length/_limit,
          advert: `http://localhost:3000/ads/?r=${+ Math.floor(Math.random() * 1000)}`
        })
      })

  }

  //load more faces faces
  loadMoreFaces = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      _page: prevState._page + 1,//increament page number as i scroll
      scrolling: true,
    }), this.loadFaces, this.reLoadAdverts)
    console.log('working')
  }

  render() {

    const { ready, faces, advert } = this.state;//destructring ready, faces and advert to this.State i.e get the the current state of these 3
    const clicked = this.loadMoreFaces
    console.log(this.state)
    return (
      <div className="App">
        <img src={advert} alt="ads" />
        {faces.length ? '' : 'loading'}
        {ready === 'loading' ? 'loading..' : ''}
        <ul className="face-grid">
          {faces.map(faces => (

            <li key={faces.id} className="faces-container">
              <Faces {...faces} />
              <div className="btn">
                <input type="button" className="btn-round" value="Buy" />
              </div>
            </li>
          ))}
        </ul>
        <a onClick={clicked} href="">LoadMore</a>
      </div>
    );
  }
}


export default FacesList;
