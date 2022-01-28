import React,{ Fragment,useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../action/auth';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Login = ({ login, isAuthenticated }) => {
    AOS.init()
    const [formData,setFormData] = useState({
        email:'',
        password:''
    });
    const {email,password} = formData;
    const onChange = e =>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const onSubmit = e =>{
        e.preventDefault();
        login({email,password});
    }
    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }
    return (
        <Fragment>
            <div class="card text-center login">
            <div class="card-header">
               <b> LOGIN </b>
            </div>
            <div className="row justify-content-center mt-5" data-aos="flip-left">
            <div class="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">

            <form onSubmit={onSubmit} autoComplete="off">
             <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" name='email' value={email} onChange={onChange} class="form-control" id="inputEmail" placeholder="Email" />
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password"  name='password' value={password} onChange={onChange} class="form-control" id="inputPassword" placeholder="Password" />
            </div>
            <div class="form-group">
                <div class="form-check">
                <label class="form-check-label" for="gridCheck">
                    Don't register yet? Please <Link to="/register">Register</Link> here
                </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            </form>

            </div>
            </div>
            </div>
        </Fragment>
    )
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { login })(Login);
  