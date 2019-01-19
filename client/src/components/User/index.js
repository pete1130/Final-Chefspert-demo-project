import React from 'react';
import UserLayout from '../../HOC/user';



const UserDashboard = ({user}) => {
    return (
       <UserLayout>
           <div>
               <div className="user_info_panel">
                <h1>Welcome, {user.userData.name}!</h1>
     
               </div>

                
                
           </div>
       </UserLayout>
    );
};

export default UserDashboard;