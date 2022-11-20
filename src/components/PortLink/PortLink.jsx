import "./portLink.css"
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function PortLink() {
   return (
      <section className="portlink">
         <h1 className="portlink__header">Welcome</h1>

         <div className="portlink__buttons">
            <Link to="/login">
               <button className="portlink__login">Log in</button>
            </Link>

            <Link to="/signup">
               <button className="portlink__register">Sign up</button>
            </Link>
         </div>
      </section>
   )
}