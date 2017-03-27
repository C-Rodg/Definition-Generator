import React from 'react';
import Config from './Config';

const Content = () => {
    return (
        <section className="section content-body">
            <div className="container">
                <div className="columns">
                   <div className="column is-5 is-offset-3">
                       <Config />
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Content;