import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {logoutUser} from '../../../actions/user_actions';


class Header extends Component {

    state= {
        page: [
            {
                name: 'Home',
                linkTo:'/',
                public: true
            },
            {
                name: 'Dishes',
                linkTo:'/shop',
                public: true
            }
        ],
        user: [
            {
                name:'My Cart',
                linkTo:'/user/cart',
                public: false
            },
            {
                name: 'My Account',
                linkTo:'/user/dashboard',
                public:false
            },
            {
                name: 'Log In',
                linkTo:'/register_login',
                public:true
            },
            {
                name: 'Log Out',
                linkTo:'/user/logout',
                public:false
            }
        ]
        
    }
    logoutHandler = () => {
        this.props.dispatch(logoutUser()).then(response => {
            if (response.payload.success) {
                this.props.history.push('/')
            }
        })
    }

    cartLink = (item,i) => {
        return(
            <div className="cart_link" key={i}>
                <Link to={item.linkTo}>
                    {item.name} 
                </Link>
            </div>
        )
    }

    defaultLink = (item,i) => (
        item.name === 'Log Out' ? 
        <div className ="log_out_link"
            key={i}
            onClick={()=> this.logoutHandler()}>
            {item.name}
        </div>
    :
        <Link to={item.linkTo} key={i}>
            {item.name}
        </Link>
    )

    showLinks = (type) =>{
        let list = [];

        if(this.props.user.userData) {
            type.forEach((item)=>{
                if(!this.props.user.userData.isAuth){
                    if(item.public === true) {
                        list.push(item)
                    }
                } else {
                    if(item.name !== 'Log In'){
                        list.push(item)
                    }
                }
        })
    }

    return list.map((item,i)=>{
        if(item.name !== 'My Cart'){
            return this.defaultLink(item,i)
        } else {
            return this.cartLink(item,i)
        }
        
    })

}



    render () {
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className = "left">
                        <div className="logo">
                            Chefspert
                        </div>
                    </div>

                    <div className= "right">
                        <div className="top">
                            {this.showLinks(this.state.page)}
                            {this.showLinks(this.state.user)}
                        </div>
                    </div>
                </div>
            </header>

            
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(Header));