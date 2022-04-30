import React from 'react'
import FeaturedContainer from './containers'
import './containers/featured.css'

const Featured = () => {

  function reveal() {
    var reveals = document.querySelectorAll(".Featured");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <div className='Featured'>
      <FeaturedContainer/>
    </div>
  )
}

export default Featured
