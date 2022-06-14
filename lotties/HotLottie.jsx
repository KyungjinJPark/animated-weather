// Source: https://www.digitalocean.com/community/tutorials/how-to-add-animations-to-react-apps-with-react-lottie

import React from 'react'
import Lottie from 'react-lottie'
import animationData from './hotAnim.json'

const HotLottie = () => {
  const options = {
    loop: false,
    animationData: animationData
  };

  return (
    <Lottie
      options={options}
      height={"15em"}
      width={"15em"}
    />
  )
}

export default HotLottie;