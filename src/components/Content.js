import React from 'react';
import Config from './Config';
import Definition from './Definition';

const Content = () => {
    return (
        <section className="section content-body">
            <div className="container">
                <div className="columns">
                   <div className="column is-5 is-offset-1">
                       <Config />
                   </div>
                   <div className="column is-4">
                        <Definition def={"My definition content..."}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;