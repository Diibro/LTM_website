export const Sec_1 = () =>{
     return(
          <div className="get-Started">
               <div className="col col_1">
                    <h4>L T M</h4>
                    <p>Here for you</p>
               </div>
               <div className="col col_2">
                    <h2>We are the best choice for you</h2>
                    <p>Get your goods transported fast | Ship the best cars and trucks of your choice | Buy and sell used cars</p>
               </div>
               <div className="col col_3">
                    <button>Get Started</button>
               </div>
          </div>
     )
}

const FreeSec = ({children}) => {
     return(
          <div className="free-sec">
               {children}
          </div>
     )
}

export const ProductCard = ({children}) => {
     return(
          <div className="product-card">
               {children}
          </div>
     )
}

export default FreeSec;

