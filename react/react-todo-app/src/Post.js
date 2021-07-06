import React from "react";
import {connect} from "react-redux";

import {addPost, deletePost} from "./posts_api";

import {getPosts} from "./actions";


import PostDetail from "./postDetail";


class Posts extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            posts: []
        }

    }

    loadPostsFromApi = () => {
        getPosts().then((post) => {
            this.setState({posts: post})
        }).catch((error) => {
            console.log(error)
        })
    }


    componentDidMount() {
        this.props.getPosts();
    }

    handleDelete = (post) => {
        deletePost(post.target.value)
            .then((resp) => {
                this.loadPostsFromApi();
            })
            .catch((error) => {
                console.log(error)
            })
    }


    renderPosts() {

        console.log(this.state.posts)

        const filteredPosts = this.props.selectedCategory.code === 'all'
            ?
            this.props.posts
            :
            this.props.posts.filter((post) => {
                return post.category === this.props.selectedCategory.code
            });


        return (
            <div className="col">
                <h3>Posts</h3>
                {filteredPosts.map((post) => {
                    return <PostDetail key={post.id} post={post} onDelete={this.handleDelete}/>
                })}
            </div>
        )
    }

    render() {
        return (
            <div class="row">
                <div className="col">
                    {this.renderPosts()}
                </div>
            </div>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        selectedCategory: state.selectedCategory
    }
}

export default connect(mapStateToProps, {getPosts})(Posts);
