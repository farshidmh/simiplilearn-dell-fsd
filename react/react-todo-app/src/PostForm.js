import React, {Component} from "react";


class PostForm extends Component {

    state = {
        id: 0,
        title: "",
        body: "",
        author: "",
        category: ""
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.onNewPost(this.state);
        this.setState({
            title: '',
            body: '',
            author: '',
            category: ''
        })
    }

    handleTitleChange = (e) => {
        const post = this.state.post;
        this.setState({post: {...post, title: e.target.value}})
    }

    handleBodyChange = (e) => {
        const post = this.state.post;
        this.setState({post: {...post, body: e.target.value}})
    }

    handleAuthorChange = (e) => {
        const post = this.state.post;
        this.setState({post: {...post, author: e.target.value}})
    }

    handleCategoryChange = (e) => {
        const post = this.state.post;
        this.setState({post: {...post, category: e.target.value}})
    }

    renderCategories() {
        return this.state.categories.map((category) => {
            return <option key={category.code} value={category.code}> {category.name} </option>
        });
    }


    render() {

        return (
            <div className="col-4">
                <h4> Post a new form </h4>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" class="form-control"
                                       value={this.state.post.title}
                                       onChange={this.handleTitleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="body">Body</label>
                                <textarea id="body" name="body"
                                          className="form-control"
                                          onChange={this.handleBodyChange}
                                >{this.state.post.body}</textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" id="author" name="author" class="form-control"
                                       value={this.state.post.author}
                                       onChange={this.handleAuthorChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select id="category" name="category" class="form-control"
                                        onChange={this.handleCategoryChange}
                                >
                                    {this.renderCategories()}
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary"> Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }

}

export default PostForm;




