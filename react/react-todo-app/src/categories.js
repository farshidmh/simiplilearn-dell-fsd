import React,{Component} from "react";


class Categories extends Component{

    render() {

        const categories = [
            {code:"all",name:"All"},
            ...this.props.categories
        ]

        console.log(categories)

        return (
            <div className="row">
            <div class="col">
                <h4>Categories</h4>

                    {categories.map(  (category)=>{
                        return <button className="btn btn-success mr-3" onClick={ ()=>{this.props.onCategorySelect(category) }} >
                            {category.name}
                        </button>
                    } )}

            </div>
            </div>
        )

    }


}

export default Categories;