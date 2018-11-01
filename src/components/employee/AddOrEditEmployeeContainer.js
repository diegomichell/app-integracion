import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as courseAction from '../../action/EmployeeAction';
import * as authorAction from '../../action/AuthorAction';
import EmployeeForm from './EmployeeForm'; // eslint-disable-line import/no-named-as-default
import { authorsFormattedForDropdown } from '../../selectors/selectors'; // eslint-disable-line import/no-named-as-default


export class AddOrEditEmployeeContainer extends React.Component {

  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.action.getEmployeeAction(this.props.match.params.id)
      .catch(error => {
        toastr.error(error);
      });

    this.props.action.getAuthorsAction()
      .catch(error => {
        toastr.error(error);
      });
  }


  handleSave(employee) {
    this.props.action.saveEmployeeAction(employee)
      .then(() => {
        toastr.success('Empleado guardado');
        this.props.history.push('/employees');
      }).catch(error => {
      toastr.error(error);
    });
  }


  handleCancel(event) {
    event.preventDefault();
    this.props.history.replace('/employees');
  }


  render() {
    const { initialValues } = this.props;
    const heading = initialValues && initialValues.id ? 'Editar' : 'Agregar';

    return (
      <div className="container pt-3">
        <EmployeeForm
          heading={heading}
          authors={this.props.authors}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
          initialValues={this.props.initialValues}
        />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.match.params.id; //from the path '/employee/:id'

  if (courseId && state.selectedCourseReducer.course && courseId === state.selectedCourseReducer.course.id) {
    return {
      initialValues: state.selectedCourseReducer.course,
      authors: authorsFormattedForDropdown(state.authorReducer.authors)
    };
  } else {
    return {
      authors: authorsFormattedForDropdown(state.authorReducer.authors)
    };
  }
};


const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ ...authorAction, ...courseAction }, dispatch)
});


AddOrEditEmployeeContainer.propTypes = {
  action: PropTypes.object.isRequired,
  history: PropTypes.object,
  authors: PropTypes.array,
  initialValues: PropTypes.object,
  match: PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditEmployeeContainer);
