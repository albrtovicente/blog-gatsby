import * as React from "react"
import '../pages/index.css'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
       <div className="container">
           <div className="container2">
              <h1 style={{textAlign:`center`}}>
                Mi blog</h1>
                <StaticImage 
                  // style={{width: `1300px`,height: `200px`, textAlign: `center`}}
                  style={{marginTop:`30px`}}
                  src="../images/descarga.jpg"
                  className="logo"
                />
           </div>


           <div>
              <a className="enlace" href="/sobremi">SOBRE MI</a>
           </div>
       </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
