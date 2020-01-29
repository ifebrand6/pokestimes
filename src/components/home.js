import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from  "react-redux";

class Home extends Component{
    render(){
        console.log(` this is`, this.props)
        const {posts} = this.props;
        const postLists = posts.length ? (
            posts.map((post) => {
               return (
                    <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A poke ball"/>
                    <div className="card-content">
                    <Link to={'/' + post.id} className="red-text">
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
            <div className="container home">
                <h4 className="center">
                    Home
                </h4>
                <div>{postLists}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);