import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <form>
                                <h3>Log In</h3>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Email..." />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password.." />
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-primary btn-md" id="" Value="Login" />
                                </div>
                            </form>
                            <div id="signin">
                                <p>Not yet Registered<span><Link to="/signup">&nbsp;Sign Up</Link></span></p>
                                <p><a href="/signup">&nbsp;Forgot Password?</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        )
    }
}
export default Login