import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      {/*sidebar*/}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} //we can do like this or create a variant(took an ss of it)
          animate={{opacity:1, scale:1}} 
          transition={{duration:0.5}}>
            ...Discover my Work and Network...
          </motion.span>

        <div className="social">
          <a href="https://www.linkedin.com/in/sneha-upadhyay-5997582a8/"><img src="/linkedinlogo.svg" alt="" /></a>
          <a href="https://www.instagram.com/_sneboah_21/"><img src="/instagram.png" alt="" /></a>
          <a href="https://github.com/Sneboah21"><img src="/github-svgrepo-com.svg" alt="" /></a>
        </div>
      </div>
    </div>

  )
}
export default Navbar;  