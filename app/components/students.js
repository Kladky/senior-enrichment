import React from 'react';
import NewStudentContainer from '../containers/NewStudentContainer';
import { Link } from 'react-router';

export default function Students (props) {
    return (
      <div>
          <h1>Student directory</h1>
          <NewStudentContainer />
          <div>
            <h2>Student list:</h2>
            <ul>
            {
              props.students && props.students.map(student => (
                <div key={ student.id }>
                  <li>{ student.name }
                    <Link to={`/student/${student.id}`}><span title="edit" className="edit-button"><i className="fa fa-pencil"></i></span></Link>
                    <span title="delete" className="del-button" onClick={ () => props.removeStudent(student.id) }><i className="fa fa-trash"></i></span>
                  </li>
                </div>
              ))
            }
            </ul>
          </div>
        </div>
    );
}