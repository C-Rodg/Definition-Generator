import React from 'react';

const Definition = ({def}) => {
    return (
        <div className="card definition">
            <header className="card-header">
                <p className="card-header-title">Preview</p>
            </header>
            <div className="card-content">
                 <div className="content">
                    <div className="field">
                        <label className="label">Definition Text</label>
                        <p className="control">
                            <textarea className="textarea" placeholder="Definition content..." value={def} readOnly></textarea>
                        </p>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <a className="card-footer-item">Save Definition</a>
            </footer>
        </div>
    );
};

export default Definition;