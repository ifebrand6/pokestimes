import React, {Component} from 'react';
import Axios from 'axios';

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
        const postLists = posts.map((post) => {
            if (post.length === 0){
                return <p> there is no post</p> 
            } else{
                return (
                    <div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                    </div>
                )
            }

        })
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