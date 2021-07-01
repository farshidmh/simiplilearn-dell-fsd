import React from "react";
import {getCategories} from "./categories_api";
import {addPost} from "./posts_api";

class PostForm extends React.Component {

    state = {
        id: 0,
        title: "",
        body: "",
        author: "",
        category: "",
        categories: []
    }

    constructor() {
        super();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        getCategories()
            .then((category) => {
                this.setState({categories: category})
            })
            .catch((error) => {
                console.log(error)
            });
    }


    handleFormSubmit(event) {
        event.preventDefault();
        this.handleNewPost(this.state);
        this.setState({
            title: '',
            body: '',
            author: '',
            category: ''
        })
    }

    handleNewPost = (post) => {

        addPost(post)
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        this.setState({[fieldName]: fieldValue})
    }

    renderCategories() {
        return this.state.categories.map((category) => {
            return <option key={category.code} value={category.code}> {category.name} </option>
        });
    }


    render() {

        return (
            <div className="col">
                <h4> Post a new form </h4>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input type="text" id="id" name="id" className="form-control"
                                       value={this.state.id}
                                       onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" className="form-control"
                                       value={this.state.title}
                                       onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Body</label>
                                <textarea id="body" name="body"
                                          className="form-control"
                                          onChange={this.handleChange}
                                >{this.state.body}</textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" id="author" name="author" className="form-control"
                                       value={this.state.author}
                                       onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select id="category" name="category" className="form-control"
                                        onChange={this.handleChange}
                                >
                                    {this.renderCategories()}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary"> Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }

}

export default PostForm;




