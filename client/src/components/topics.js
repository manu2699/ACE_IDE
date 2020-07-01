import React from 'react'
export default ({ topics }) => {
  return (
    <>
      <center id="topics">
        <h2>
          Every Topic You need for your </h2>
        <h2> <b>Coding Interview</b>
        </h2>
      </center>
      <div className="topics">

        {topics.map((topic, index) => {
          let colorIndex = index % 6;
          if (index > 5 && index < 12)
            colorIndex = 6 - colorIndex - 1;
          return (
            <div className={`card card${colorIndex}`}>
              <b>{topic}</b>
            </div>
          )
        })}
      </div>
    </>
  )
}