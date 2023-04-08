import React from 'react';
import login from "../../assest/login.jpeg"
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa"
import { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-hot-toast';

const Register = () => {

    const {register, googleUser} = useContext(AuthContext)

    const hendeladdtoRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            name : name,
            email : email,
            password : password
        }
        // console.log(user)

        register(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success('Your register is successful')
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
            toast.success("You have successfully registered with Google")
        })
        .catch(error =>{
            console.error(error)
            toast.error(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{ width: 570 }} src={login} className=" rounded-lg shadow-2xl" alt='' />
                <div className="card flex-shrink-0 w-full md:ms-6 max-w-sm shadow-2xl bg-base-100 rounded-xl">
                    <form onSubmit={hendeladdtoRegister} className="card-body">
                        <h1 className='text-center text-4xl font-bold'>Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Login</button>
                        </div>
                        <p className='text-center'>Already have an account? Go <Link className='text-success font-bold' to={"/login"}>Login</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={hendelAddToGoogle} className='btn btn-success btn-outline font-bold'> <FaGoogle  className='icons google text-2xl text-white mr-7' /> Register With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;