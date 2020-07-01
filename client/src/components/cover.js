import React, { useState, useEffect, Component } from 'react';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Index: 0,
      count: 3,
      slideshow: [
        { imgPath: require("../Assets/card1.svg"), imageTitle: "Question Library", quotes: "250 HANDPICKED QUESTIONS FOR CODING INTERVIEWS IN LEADING COMPANIES." },
        { imgPath: require("../Assets/card2.svg"), imageTitle: "Highly Qualified Mentors", quotes: "HIGHLY QUALIFIED MENTORS FROM LEADING TECH GIANTS." },
        { imgPath: require("../Assets/card3.svg"), imageTitle: "Mock Test", quotes: "FINAL TOUCH WITH COMPANY SPECIFIC MOCK TESTS" }
      ]
    }
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        Index: (this.state.Index + 1) % (this.state.count)
      })
    }, 5000)
  }

  render() {
    return (
      <div className="landing">
        <div className="cover">
          <div className="col">
            <div>
              <h2>Master Your</h2>
              <h2>Destiny With</h2>
              <h2><b>PlacementSaga</b></h2>
              <button className="blue-btn">View Sample Question</button>
            </div>
          </div>
          <div className="col2">
            <div className="oval oval1">
              <img src={this.state.slideshow[this.state.Index].imgPath} alt="" />
              <h3>{this.state.slideshow[this.state.Index].imageTitle}</h3>
              <div className="smallOval smallOval1">
              </div>
            </div>
            <div className="oval oval2">
              <h4>{this.state.slideshow[this.state.Index].quotes}</h4>
              <div className="smallOval smallOval2">
              </div>
            </div>
          </div>
        </div>
        <div id='controls'>
          {Array.from({ length: this.state.count }, (_, index) => {
            if (index == this.state.Index) {
              return <div className='circle active'></div>
            } else {
              return (
                <div
                  className='circle inactive'
                  onClick={(e) => {
                    this.setState({
                      Index: index
                    })
                  }}></div>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

export default Cover;

// export default () => {
//   const [Index, setIndex] = useState(0)
//   const [count, setCount] = useState(3)

//   const slideshow = [
//     { imgPath: require("../Assets/card1.svg"), imageTitle: "Question Library", quotes: "250 HANDPICKED QUESTIONS FOR CODING INTERVIEWS IN LEADING COMPANIES." },
//     { imgPath: require("../Assets/card2.svg"), imageTitle: "Highly Qualified Mentors", quotes: "HIGHLY QUALIFIED MENTORS FROM LEADING TECH GIANTS." },
//     { imgPath: require("../Assets/card3.svg"), imageTitle: "Mock Test", quotes: "FINAL TOUCH WITH COMPANY SPECIFIC MOCK TESTS" }
//   ]

//   useEffect(() => {
//     setInterval(() => {
//       setIndex((Index + 1) % count)
//     }, 2000)
//   }, [])

//   return (
//     <div className="landing">
//       <div className="cover">
//         <div className="col">
//           <div>
//             <h2>Master Your</h2>
//             <h2>Destiny With</h2>
//             <h2><b>PlacementSaga</b></h2>
//             <button className="blue-btn">View Sample Question</button>
//           </div>
//         </div>
//         <div className="col2">
//           <div className="oval oval1">
//             <img src={slideshow[Index].imgPath} alt="" />
//             <h3>{slideshow[Index].imageTitle}</h3>
//             <div className="smallOval smallOval1">
//             </div>
//           </div>
//           <div className="oval oval2">
//             <h4>{slideshow[Index].quotes}</h4>
//             <div className="smallOval smallOval2">
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id='controls'>
//         {Array.from({ length: count }, (_, index) => {
//           if (index == Index) {
//             return <div className='circle active'></div>
//           } else {
//             return (
//               <div
//                 className='circle inactive'
//                 onClick={(e) => setIndex(index)}></div>
//             )
//           }
//         })}
//       </div>

//     </div>
//   )
// }