import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Signup extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <form>
                                <h3>Create Account</h3>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="" placeholder="Email..." />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="" placeholder="confirm Email..." />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Pnone Number" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password.." />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Confirm Password.." />
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-primary btn-md" id="" Value="Login" />
                                </div>
                            </form>
                            <div id="signin">
                                <p>Already Registered<span><Link  Link to="/login">&nbsp;Login</Link ></span></p>
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
export default Signup