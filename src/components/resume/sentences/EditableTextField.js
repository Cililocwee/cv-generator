import React, { Component } from "react";

export default class EditableTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      type: props.type || "text",
      value: props.value || "",
      editClassName: props.editClassName,
      edit: false,
    };
  }

  edit() {
    this.setState({ edit: this.edit !== false });
  }

  render() {
    return (
      (this.state.edit === true && (
        <input
          name={this.state.name}
          type={this.state.type}
          value={this.state.value}
          className={this.state.editClassName}
          autoFocus
          onFocus={(event) => {
            const value = event.target.value;
            event.target.value = "";
            event.target.value = value;
            this.setState({ backup: this.state.value });
          }}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          onBlur={(event) => {
            this.setState({ edit: false });
          }}
          onKeyUp={(event) => {
            if (event.key === "Escape") {
              this.setState({ edit: false, value: this.state.backup });
            }
            if (event.key === "Enter") {
              this.setState({ edit: false });
            }
          }}
        />
      )) || (
        <span
          onClick={(event) => {
            this.setState({ edit: this.state.edit !== true });
          }}
        >
          {this.state.value}
          <br />
        </span>
      )
      // <div className="education">
      //   <h4>Education</h4>
      //   <EducationAtom
      //     degree="M.A."
      //     institution="Univeristy of California - Los Angeles"
      //     date="May 2014"
      //     subject="Marketing"
      //   />
      //   <EducationAtom
      //     degree="B.A."
      //     institution="University of Colorado"
      //     date="May 2012"
      //     subject="Business"
      //   />
      // </div>
    );
  }
}
