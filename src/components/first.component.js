import React from 'react';
import { connect } from 'react-redux';
import Second from './second.component';
import { updateFirstComponentValue } from '../redux/action';

const First = ({ thirdComponentValue, dispatch }) => {
    const handleOnChange = (event) => dispatch(updateFirstComponentValue(event.target.value));
    return (
        <div>
            First
            <input type='text' name='first' onChange={handleOnChange} />
            value from third : {thirdComponentValue}
            <Second />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        thirdComponentValue: state.thirdComponentValue
    }
};

export default connect(mapStateToProps)(First);