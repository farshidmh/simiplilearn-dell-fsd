import React, {Component} from "react";
import {connect} from "react-redux";
import {selectCategory, getCategories} from "./actions";


class Categories extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {

        const categories = [
            {code: "all", name: "All"},
            ...this.props.categories
        ]


        return (
            <div className="row">
                <div class="col">
                    <h4>Categories</h4>

                    {categories.map((category) => {
                        return <button className="btn btn-success mr-3" onClick={() => {
                            this.props.onCategorySelect(category)
                        }}>
                            {category.name}
                        </button>
                    })}

                </div>
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }

}


export default connect(mapStateToProps, {selectCategory, getCategories})(Categories);