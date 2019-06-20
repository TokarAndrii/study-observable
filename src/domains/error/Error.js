import React from 'react';
import { connect } from 'react-redux';
import { applySpec, } from 'ramda';
import selectors from '../app/selectors';
import isErrorActions from './isErrorActions';

const Error = ({ className, errorMessage, handleCloseError }) => (
    <div className={className}>Oops, Error! {errorMessage}
        <button className="closeErrorBtn" onClick={handleCloseError}>X</button>
    </div>
);


const mstp = applySpec({
    errorMessage: selectors.getErrorMessage
})

const mdtp = {
    handleCloseError: isErrorActions.CLOSE_ERROR,
}


export default connect(mstp, mdtp)(Error);
