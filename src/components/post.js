import React, {Component} from 'react';
import Axios from 'axios';

class Post extends Component{
    state = {
        post: ''
    }
    componentDidMount(){
        let id = this.props.match.params.post_id
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + id )
        .then(response => {
            this.setState({
                post: response.data
            })
        })
    }
    render(){
       
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">
                    {this.state.post.title}
                </h4>
                <p>{this.state.post.body}</p>

            </div>
        ) : (
            <div className="center">...Loading please wait.</div>
        )
        return(
            <div className="container">
            
                <h4>{post}</h4>
            </div>
        )
    }
}

export default Post;