import React from "react";



const Home = () => {

    return (
        <div>
            <h2>Welcome to my Blog</h2>
            <div className="row">
                <div className="col">
                    <button className="btn btn-success btn-block">Go to Posts</button>
                </div>
                <div className="col">
                    <button className="btn btn-success btn-block">Go to new Post</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
