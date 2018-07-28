import React from 'react'

// add link to wines (with filter option?)
// add data-driven content
// add top 5 wines for ontario?

export default function HomeContent({}) {
  return(
    <div
      css={`
        display: flex;
        flex-direction: column;
        margin: 0 1rem;
      `}
    >
      <h1 css={`font-weight: 300; text-align: center;`}>
        Explore Vintaged and Find Your Wine
      </h1>
    </div>
  )
}