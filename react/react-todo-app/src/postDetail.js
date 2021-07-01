import React from "react";


const PostDetail = (props) => {
    console.log(props)
    return (
        <div className="card mb-3">
            <div className="card-header">
                {props.post.title}
            </div>
            <div className="card-body">
                <div className="card-text"> {props.post.body} </div>
                <div className="card-text">Author: {props.post.author} </div>
                <div className="card-text">Category: {props.post.category} </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger" onClick={props.onDelete} value={props.post.id}> Delete </button>
            </div>
        </div>
    );
}

export default PostDetail;






