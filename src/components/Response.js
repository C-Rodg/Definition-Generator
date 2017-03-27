import React from 'react';

const Response = ({id, val, handleResponseChange}) => {
    return (
        <div className="field">
            <label className="label" htmlFor={"r" + id} >Response {id}</label>
            <p className="control">
                <input className="input" 
                    id={"r" + id} type="text" 
                    placeholder={"Response " + id + "..."} 
                    value={val} 
                    onChange={(ev) => {handleResponseChange(id, ev.target.value)}}
                />
            </p>
        </div>
    );
};

export default Response;