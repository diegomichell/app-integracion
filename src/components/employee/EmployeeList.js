import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const getCaret = direction => {
  if (direction === 'asc') {
    return (
      <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
    );
  }

  if (direction === 'desc') {
    return (
      <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
    );
  }

  return (
    <span> <i className="fa fa-sort" aria-hidden="true"/></span>
  );
};


const titleFormatter = (cell, row) => {
  return `<a href=${`/employees/${row.id}`} target="_blank">${cell}</a>`;
};


class EmployeeList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }

  render() {
    return (
      <BootstrapTable data={this.props.courses} selectRow={this.selectRowProp} options={this.options} bordered={false}
                      striped hover condensed>
        <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>

        <TableHeaderColumn
          dataField="name"
          dataFormat={titleFormatter}
          dataSort={true}
          caretRender={getCaret}
          filter={{ type: 'TextFilter', delay: 0 }}
          columnTitle
        >
          Nombre
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="identification"
          dataSort={true}
          filter={{ type: 'TextFilter', delay: 0 }}
          caretRender={getCaret}
          columnTitle
        >
          Cedula
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="department"
          dataSort={true}
          caretRender={getCaret}
          filter={{ type: 'TextFilter', delay: 0 }}
          columnTitle
        >
          Departamento
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="jobTitle"
          dataSort={true}
          caretRender={getCaret}
          filter={{ type: 'TextFilter', delay: 0 }}
          columnTitle
        >
          Puesto
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="monthSalary"
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          Salario
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }

}


EmployeeList.propTypes = {
  courses: PropTypes.array.isRequired,
  handleRowSelect: PropTypes.func.isRequired
};


export default EmployeeList;
