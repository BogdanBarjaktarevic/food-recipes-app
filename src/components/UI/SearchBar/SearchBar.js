import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

import { fetchRecipes } from "../../../store/actions/index";
import Icon from "../Icons/Icon/Icon";

class SearchBar extends Component {

  renderField = ({ input }) => {
    return <input {...input}/>
  }

  componentDidMount() {
    this.props.fetchRecipes(this.props.initialValues.term);
  }

  onSubmit = (formValues) => {
    this.props.fetchRecipes(formValues.term)
  }

  render() {
    return (
      <form
        className="ui center aligned form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="ui action fluid huge input">
          <Field name="term" type="text" component={this.renderField} />
          <button
            className="ui icon button"
            style={{
              backgroundColor: "rgb(242, 113, 28)",
              color: "#fff"
            }}
          >
            <Icon attachClass="search icon" />
          </button>
        </div>
      </form>
    );
  }
}


const searchBarComponent = connect(null, { fetchRecipes })(SearchBar)

export default reduxForm({
  form: 'searchTerm',
  initialValues: {term: 'meat'}
})(searchBarComponent)
