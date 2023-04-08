import React, { useContext } from 'react';
import login from "../../assest/login.jpeg"
import { Link } from 'react-router-dom';
import {FaGoogle} from "react-icons/fa"
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-hot-toast';

const Login = () => {

    const {loginUser, googleUser} = useContext(AuthContext)

    const hendelAddToLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            email : email,
            password : password
        }
        // console.log(user)

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success('Your login is successful')
        })
        .catch(error => {
            console.error(error)
            toast.error(error.message)
            form.reset()
        })

    }
    // google
    const hendelAddToGoogle = () =>{
        googleUser()
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success("You have successfully Login with Google")
        })
        .catch(error =>{
            console.error(error)
            toast.error(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{width :570}} src={login} className=" rounded-lg shadow-2xl" alt='' />
                <div className="card flex-shrink-0 w-full md:ms-6 max-w-sm shadow-2xl bg-base-100 rounded-xl">
                    <form onSubmit={hendelAddToLogin} className="card-body">
                        <h1 className='text-center text-4xl font-bold'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Login</button>
                        </div>
                        <p className='text-center'>New in Mobile Market? Go <Link className='text-success font-bold' to={"/register"}>Register</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={hendelAddToGoogle} className='btn btn-success btn-outline font-bold'> <FaGoogle className='icons google text-2xl text-white mr-7'/> Login With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;