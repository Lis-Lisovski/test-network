
const Profile = (props) => {
   return (
      <div className="container">
         <div className="row justify-content-end mr-3 ">
            <div className="col-8">
               <div className="card mb-3">
                  <img src="#" className="card-img-top" alt="user image"/>
                  <div className="card-body">
                     <h5 className="card-title">{props.firstName} {props.secondName}</h5>
                     <p className="card-text pb-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
               </div>
            </div>
         </div>
      </div> 
   );

}

export default Profile;
