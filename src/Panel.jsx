const Panel = () => {
   return (
      <div className="container-fluid">
         <div className="row justify-content-start">
            <div className="col-6 col-lg-4">
               <div className="bg-light-grey">
                  <div className="list-group" id="list-tab" role="tablist">
                     <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#" role="tab" aria-controls="profile">My Profile</a>
                     <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#" role="tab" aria-controls="gallery">Gallery</a>
                     <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#" role="tab" aria-controls="friends">Friends</a>
                     <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#" role="tab" aria-controls="settings">Settings</a>
                     <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#" role="tab" aria-controls="Videos">Videos</a>
                     <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#" role="tab" aria-controls="Sign-out">Sign out</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Panel;