import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={0}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="3" rx="0" ry="0" width="286" height="263" /> 
    <rect x="5" y="280" rx="0" ry="0" width="273" height="76" />
  </ContentLoader>
)

export default Skeleton