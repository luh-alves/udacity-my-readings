import React from 'react';
import * as BooksAPI from '../BooksAPI';
import { toast } from "react-toastify";

class Book extends React.Component {

    moveToShelf(event) {
        BooksAPI.update(this.props.book, event.target.value)
            .then(() => toast.success("Atualizado com sucesso"))
            .then(this.props.notifyBookUpdated || function () { })
            .catch(() => toast.error("Erro ao atualizar"))
    }

    render() {
        const backgroundImage = 'url(' + (this.props.book.imageLinks ? this.props.book.imageLinks : {}).thumbnail + ')';
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select defaultValue={this.props.book.shelf} onChange={this.moveToShelf.bind(this)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}
export default Book;