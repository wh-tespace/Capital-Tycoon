import "./portLink.css"

export default function PortLink() {
   return (
      <section className="portlink">
         <h1 className="portlink__header">Welcome</h1>

         <div className="portlink__buttons">
            <Link to="/login">
               <button className="portlink__login">Log in</button>
            </Link>

            <Link to="/register">
               <button classname="portlink__register">register</button>
            </Link>
         </div>
      </section>
   )
}