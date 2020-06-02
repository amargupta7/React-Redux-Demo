import React from 'react';
import { connect } from 'react-redux';
import { updateThirdComponentValue } from '../redux/action';

const Third = ({ firstComponentValue, dispatch }) => {
    const handleOnChange = (event) => dispatch(updateThirdComponentValue(event.target.value));

    return (
        <div>
            Third
            <input type='text' name='third' onChange={handleOnChange} />
            Value from first: {firstComponentValue}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        firstComponentValue: state.firstComponentValue
    }
};
export default connect(mapStateToProps)(Third);