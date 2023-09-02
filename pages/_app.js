import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "../public/css/style.css"
import Cards from "../pages/component/Cards"
export default function Home() {
  return (
    <div className="home">
      <header className='header'>
            <h1>MAEMAN</h1>
            <p> WHAT'S INCLUDED</p>
        </header>
        <Cards/>
 
    </div>
  )
}
