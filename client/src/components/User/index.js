import React from 'react';
import UserLayout from '.././HOC/user';
import MyButton from '../utils/button';

const UserDashboard = ({user}) => {
    return (
       <UserLayout>
           <div>
               <div className="user_info_panel">
                <h1>User Info</h1>
                <div>
                   Welcome, {user.userData.name}!
                    
                </div>
                <MyButton
                    type="default"
                    title="Edit account info"
                    linkTo="/user/user_profile"/>
               </div>

                <div className ="user_info_panel">
                    <h1>Purchase History</h1>
                    <div className="user_product_block_wrapper">
                        History
                    </div>
                </div>
           </div>
       </UserLayout>
    );
};

export default UserDashboard;