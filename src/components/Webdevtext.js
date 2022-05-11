import React, {useState} from 'react'
import {useTransition, animated} from 'react-spring'

const Webdevtext = () => {
    const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 2000,
    onRest: () => set(!toggle),
  })
  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          
        }}
        className='mx-auto'>
        Web Developer.
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          
        }}>
        Software Engineer.
      </animated.div>
    )
  )
}

export default Webdevtext