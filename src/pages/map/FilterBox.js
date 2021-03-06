import React, { Component } from 'react';
import { Types } from '../common/Models.js';
import $ from 'jquery';
import "../../resources/FilterBox.css";

class FilterBox extends Component {

  handleApplyFilter = this.handleApplyFilter.bind(this);

  handleApplyFilter() {
    var b = [];
    $("[name='selected']:checked").each(function() {
      b.push(Math.round($(this).val()));
    });
    this.props.onFilterApply(b);
  }

  render() {

    return (
      <div className='filterBox'>
        <h3>Filter Traces</h3>

        <h4>Types</h4>

        {
          Object.keys(Types()).map((key, index) => (

            <div className="form-check form-check-inline" key={key}>

              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="selected" value={index} defaultChecked={this.props.types.indexOf(index) > -1} />

                {key}
              </label>
            </div>

          ))

        }


        <div className="box-apply">
          <button type="button" onClick={this.handleApplyFilter} className="btn btn-primary btn-sm">Apply</button>

          <button type="button" onClick={this.props.onCancel} className="btn btn-secondary btn-sm">Cancel</button>
        </div>

      </div>
    );
  }

}

export default FilterBox;
