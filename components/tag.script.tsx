import React from 'react'
import Script from 'next/script'

// eslint-disable-next-line react/display-name
export default ({script}: { script: string }) => {

  return(
    <Script id={`s${Math.random().toString().replace('.', '')}`} dangerouslySetInnerHTML={{ __html: `${script}` }} />
  )
}