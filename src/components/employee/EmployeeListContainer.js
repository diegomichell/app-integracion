import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as courseAction from '../../action/EmployeeAction';
import EmployeeList from './EmployeeList';


export class EmployeeListContainer extends React.Component {

  constructor() {
    super();

    this.state = { selectedCourseId: undefined };

    this.handleAddCourse = this.handleAddCourse.bind(this);
    this.handleEditCourse = this.handleEditCourse.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRowSelect = this.handleRowSelect.bind(this);
  }


  componentDidMount() {
    this.props.action.getCoursesAction()
      .catch(error => {
        toastr.error(error);
      });
  }


  handleAddCourse() {
    this.props.history.push('/employee');
  }


  handleEditCourse() {
    const selectedCourseId = this.state.selectedCourseId;

    if (selectedCourseId) {
      this.setState({ selectedCourseId: undefined });
      this.props.history.push(`/employee/${selectedCourseId}`);
    }
  }


  handleDelete() {
    const selectedCourseId = this.state.selectedCourseId;

    if (selectedCourseId) {
      this.setState({ selectedCourseId: undefined });
      this.props.action.deleteCourseAction(selectedCourseId)
        .catch(error => {
          toastr.error(error);
        });
    }
  }


  handleRowSelect(row, isSelected) {
    if (isSelected) {
      this.setState({ selectedCourseId: row.id });
    }
  }


  render() {
    const { courses } = this.props;

    if (!courses) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col">
            <h1>Empleados</h1>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col">
            <div className="btn-group" role="group">
              <a
                href="" role="button"
                className="btn btn-primary"
                onClick={this.handleAddCourse}
              >
                <i className="fa fa-plus" aria-hidden="true"/> Nuevo
              </a>

              <a
                href="" role="button"
                className="btn btn-warning ml-2"
                onClick={this.handleEditCourse}
              >
                <i className="fa fa-pencil" aria-hidden="true"/> Editar
              </a>

              <a
                href="" role="button"
                className="btn btn-danger ml-2"
                onClick={this.handleDelete}
              >
                <i className="fa fa-trash-o" aria-hidden="true"/> Borrar
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <EmployeeList courses={courses} handleRowSelect={this.handleRowSelect}/>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  courses: state.coursesReducer.courses
});


const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(courseAction, dispatch)

});


EmployeeListContainer.propTypes = {
  courses: PropTypes.array,
  action: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListContainer);
