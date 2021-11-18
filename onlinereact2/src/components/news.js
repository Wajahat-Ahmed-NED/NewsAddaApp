import React, { Component } from 'react'
import NewItem from './newItem'

export default class News extends Component {
    render() {
        return (
            <div>
                Its me news
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <NewItem title="Cricket" description='go golkdfjlahfoiashfoiwflskdjfaslfhaslf kdsf jlfj l; aksglhalh a hg hgalkdfjashfaldfjdsljf'imageUrl="https://static.independent.co.uk/2020/08/19/11/breaking-news.png?width=1200&auto=webp&quality=75" />

                        </div>
                        <div className="col-md-4">
                            <NewItem title="Cricket" description='go golkdfjlahfoiashfoiwflskdjfaslfhaslf kdsf jlfj l; aksglhalh a hg hgalkdfjashfaldfjdsljf'imageUrl="https://static.independent.co.uk/2020/08/19/11/breaking-news.png?width=1200&auto=webp&quality=75" />

                        </div>
                        <div className="col-md-4">
                            <NewItem title="Cricket" description='go golkdfjlahfoiashfoiwflskdjfaslfhaslf kdsf jlfj l; aksglhalh a hg hgalkdfjashfaldfjdsljf'imageUrl="https://static.independent.co.uk/2020/08/19/11/breaking-news.png?width=1200&auto=webp&quality=75" />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
