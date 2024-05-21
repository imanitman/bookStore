import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Book from './components/Main/Book'
import Menu from './components/Main/Menu'
import { books } from '../data.json'
import { useMediaQuery } from 'react-responsive'
import Page from './components/Pagination'
function App() {
  const [book, setBook] = useState([])
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 500px)'
  })
  useEffect(() => {
    fetch('http://localhost:3000/books/allBooks')
    .then(res => res.json())
    .then(books => {
      setBook([...books])
    })
  })
  if (isDesktopOrLaptop){
    return <div className='de1 container' style={{justifyContent:'center', alignItems:'center'}}>
    <Header className="col-12" />
    {/* Props - properties */}
    <div className='d-flex' style={{ gap: '10px', marginTop: '30px' }}>
      <div className=''>
        <Menu data={book}></Menu>
      </div>
      <div className='d-flex flex-wrap col-10' style={{ gap: '5px' }}>
        {book.map(b => <Book data={b} key={b.id} />)}
      </div>
    </div>
    <div style={{marginLeft:'40%', marginTop:'10px'}}><Page></Page></div>
    <Footer />
  </div>
  }
  else{
    return <div className='de1 container text-align-center'>
    <Header />
    {/* Props - properties */}
      <div className='d-flex flex-wrap col-12' style={{ gap: '3px' }}>
        {books.map(b => <Book data={b} key={b.id} />)}
      </div>
  </div>
  }
  
}

export default App
