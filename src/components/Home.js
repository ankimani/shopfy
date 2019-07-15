import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const PostList = posts.map(post => {
            return (
                <div className="container">
                    <div className="post" key={post.id}>
                        <Link id="link" Link to={'/' + post.id}>
                            <h3>{post.title}</h3>
                        </Link>

                        <p>{post.body}</p>
                        <hr />
                    </div>
                </div>

            );
        })
        return (
            <div className="Home">
                <p>{PostList}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home)