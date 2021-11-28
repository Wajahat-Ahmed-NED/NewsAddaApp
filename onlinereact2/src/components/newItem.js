import React, { Component } from 'react'

export default class NewItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, new1 } = this.props;
        return (
            <div>
                <div className="card shadow-lg mb-5 bg-white rounded" style={{ boxShadow: "5px 10px #888888" }}>

                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" >{title}... <span className=" position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{
                            left: "50%", zIndex: "1"
                        }}>
                            {new1}
                            <span className="visually-hidden">unread messages</span>
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Expand</a>
                        <hr />
                        <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>


                    </div>
                </div>
            </div>
        )
    }
}
