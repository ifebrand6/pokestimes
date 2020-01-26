import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component{
    state = {
        posts: []
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data.slice(0,10)
            })
        })
    }
    render(){
        const {posts} = this.state;
        const postLists = posts.length ? (
            posts.map((post) => {
               return (
                    <div className="post card" key={post.id}>
                    <div className="card-content">
                    <Link to={'/' + post.id}>
                        <span className="card-title">{post.title}</span>
                    </Link>
                        <p>{post.body}</p>
                    </div>
                    </div>
                )
            })
           
        ) : (
            <div className="center">No posts yet. check your internet connection.</div> 
        )
        return( 
            <div className="container">
                <h4 className="center">
                    Home
                </h4>
                <div>{postLists}</div>
            </div>
        )
    }
}
export default Home;