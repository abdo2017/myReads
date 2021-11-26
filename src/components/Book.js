import React, {Component} from 'react';

class Book extends Component {

    render() {
        const {id,title,image,shelf,authors} = this.props;

        return (
            <li key={id}>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${image})`
                            }}
                        />
                        <div className="book-shelf-changer">
                            <select
                                value={shelf}
                                onChange={e =>
                                    this.props.changeShelf(this.props.currentBook, e.target.value)
                                }
                            >
                                <option value="move" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{!!authors ? authors.join(", ") : "NONE"}</div>
                </div>
            </li>
        );
    }
}

export default Book;