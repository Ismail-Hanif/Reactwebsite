import './App.css'
import Topbar from './Topbar/Topbar'
import Carousel from './Carousel/Carousel'
import Card from './Card/Card'
import Heading from './Heading/Heading'
import Platform from './Platform/Platform'
import Campus from './Campus/Campus'
import Courses from './Courses/Courses'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar.jsx'
import States from './States/States.jsx'
import Review from './Reviewr/Review.jsx'
import Blogs from './Blogs/Blogs.jsx'
import Heading1 from './Heading1/Heading1.jsx'

function App() {

  return (
    <>
    <Topbar/>
    <Navbar/>
    <Carousel/>
    <Heading text="Academics"/>
    <Card/>
     <Platform/>
     <Campus/>
     <Heading1/> 
    <Courses/> 
    <States/>
    <Review/>
    <Blogs/>
    <Footer/> 
    </>
  )
}

export default App