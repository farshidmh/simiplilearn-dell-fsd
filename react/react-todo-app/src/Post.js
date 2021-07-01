import React from "react";

import PostForm from "./PostForm";
import {getPosts, addPost, deletePost} from "./posts_api";

import PostDetail from "./postDetail";


class Posts extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }

    }

    componentDidMount() {

        getPosts().then((post) => {
            this.setState({posts: post})
        }).catch((error) => {
            console.log(error)
        })

    }

    handleNewPost = (post) => {
        addPost(post)
            .then((newPost) => {
                this.setState((prevState) => {
                    return {posts: [...prevState.posts, newPost]}
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    renderPosts() {
        return (
            <div className="col-8">
                <h3>Posts</h3>
                {this.state.posts.map((post) => {
                    return <PostDetail key={post.id} post={post}/>
                })}
            </div>
        )
    }

    render() {
        return (
            <div class="row">

                {this.renderPosts()}
            </div>
        )
    }


}

export default Posts;
