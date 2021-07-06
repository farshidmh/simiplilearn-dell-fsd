import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./Home";
import Nav from "./Nav";
import Posts from "./Post";
import PostForm from "./PostForm";
import {getCategories} from "./categories_api";
import Categories from "./categories";

class App extends Component {

    state = {
        categories: [],
        selectedCategory: {code: 'all', name: 'All'}
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

    handleCategorySelect = (category) => {
        this.setState({selectedCategory: category});
    }


    render() {

        return (
            <BrowserRouter>
                <Nav/>
                <div class="container">


                    <Route path="/" exact render={Home}/>


                    <Route path="/posts" exact render={() => {
                        return (
                            <div>
                                <Categories
                                    onCategorySelect={this.handleCategorySelect}
                                />

                                <Posts />
                            </div>
                        )
                            ;
                    }}/>

                    <Route path="/posts/new" exact render={() => {
                        return (<PostForm/>);
                    }}/>


                </div>

            </BrowserRouter>
        );
    }


}

export default App;
