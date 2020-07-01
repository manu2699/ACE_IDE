import React, { useState } from 'react';

import Cover from "./cover";
import NavBar from "./navbar"
import Topics from "./topics";
import Companies from "./companies";

const Design = () => {

  const [isMobile, setisMobile] = useState(false)

  const topics = ["Array", "Sorting", "Strings", "Linked List", "Stacks & Queues", "Trees", "Dynamic Programming", "Graphs", "Searching", "Recursion", "Binray Searc Tree", "Mathematical", "Bit-Manipulation", "Heaps", "Hashing", "BackTracking", "Tries", "Famous Algorithms"]
  return (
    <>
      <NavBar isMobile={isMobile} currUser={"Maneesh"} toggleFunc={() => {
        setisMobile(!isMobile)
      }} />
      <Cover />
      <Companies />
      <Topics topics={topics} />
    </>
  )
}
export default Design;
