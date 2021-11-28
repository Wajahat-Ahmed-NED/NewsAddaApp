import React, { Component } from 'react'

export default class NewItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, new1 } = this.props;
        return (
            <div>
                <div className="card shadow p-3 mb-5 bg-white rounded" >

                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" >{title}... <span class=" position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{
                            left: "50%", zIndex: "1"
                        }}>
                            {new1}
                            <span class="visually-hidden">unread messages</span>
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Expand</a>
                        <hr />
                        <p class="card-text"><small class="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>


                    </div>
                </div>
            </div>
        )
    }
}
