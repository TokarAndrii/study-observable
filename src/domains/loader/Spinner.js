import Loader from 'react-loader-spinner';
import React from 'react';

const Spinner = ({ className }) => (
    <div className={className}>
        <Loader
            type="Audio"
            color="black"
            height="50"
            width="50"
        />
    </div>
);

export default Spinner;