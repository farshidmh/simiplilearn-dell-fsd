import React,{Component} from "react";


class Categories extends Component{

    render() {

        const categories = [
            {code:"All",name:"All"},
            ...this.props.categories
        ]

        return (
            <div class="col-2">
                <h4>Categories</h4>
                <ul class="list-group">
                    {categories.map(  (category)=>{
                        return <li onClick={ ()=>{this.props.onCategorySelect(category) }} >
                            {category.name}
                        </li>
                    } )}
                </ul>
            </div>
        )

    }


}

export default Categories;