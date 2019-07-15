import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import deletePost from './actions/deletePosts'
class Post extends Component {
    handleClick=()=>{
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/');
    }
    render() {
        const posts = this.props.posts ?

            (<div className="container">
                <div className="singlepost">
                    <h3>{this.props.posts.title}</h3>
                    <p>{this.props.posts.body}</p>
                    < Link to='/'><button className="btn btn-primary">See other Posts</button></Link>
                   <span> <button className="btn btn-danger" onClick={this.handleClick}>Delete Posts</button></span>
                </div>
                

            </div>
            )
            : (
                <div>
                    <p>Eroor 404 Post not Found</p>
                </div>
            )



        return (
            <div className="Post">
                {posts}

            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        posts: state.posts.find(post => {
            return post.id !== id
        })
    }
}

export default connect(mapStateToProps)(Post)