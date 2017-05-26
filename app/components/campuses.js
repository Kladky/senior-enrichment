import React from 'react';
import NewCampusContainer from '../containers/NewCampusContainer';
import { Link } from 'react-router';

export default function Campuses (props) {
    return (
        <div>
          <h1>Campus directory</h1>
          <NewCampusContainer />
          <div>
            <h2>Campus list:</h2>
            <ul>
            {
              props.campuses && props.campuses.map(campus => (
                <div key={ campus.id }>
                  <li>{ campus.name }
                    <Link to={`/campus/${campus.id}`}><span title="edit" className="edit-button"><i className="fa fa-pencil"></i></span></Link>
                    <span  title="delete" className={campus.students.length > 0 ? "del-button hide" : "del-button"} onClick={ () => props.removeCampus(campus.id) }><i className="fa fa-trash"></i></span>
                  </li>
                </div>
              ))
            }
            </ul>
          </div>
        </div>
    );
}