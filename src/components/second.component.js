import React from 'react';
import { connect } from 'react-redux';
import Third from './third.component';
import { defaultAction } from '../redux/action';

const Second = ({ dispatch }) => {
    const handleClick = () => dispatch(defaultAction());
    return (
        <div>
            Second
            <button onClick={handleClick}>Set to Default</button>
            <Third />
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}
export default connect(null, mapDispatchToProps)(Second);