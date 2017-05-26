import React from 'react';
import NewCampusContainer from '../containers/NewCampusContainer';
import { Link } from 'react-router';

export default function Campuses (props) {
    console.log(props.campuses);
    return (
        <div>
          <h4>THIS IS THE CAMPUSES</h4>
          <NewCampusContainer />
          <div>
            {
              props.campuses && props.campuses.map(campus => (
                <div key={ campus.id }>
                  <h5>{ campus.name }
                    <span className="del-button" onClick={ () => props.removeCampus(campus.id) }><i className="fa fa-trash"></i></span>
                    <Link to={`/campus/${campus.id}`}><span className="edit-button"><i className="fa fa-eye"></i></span></Link>
                  </h5>
                </div>
              ))
            }
          </div>
        </div>
    );
}