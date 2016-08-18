import React, { Component } from 'react';

//лучше не перегружать компоненты - тут уже стоит разбить на Article и CommentList
export default class Article extends Component {
    /* коментарий пусть побудит, он хорошее напоминание
        constructor() {
            super()
            this.state = {
                isOpen: false
            }
        }

    */
    state = {
        isOpen: false,
        showComments: false
    }

    commentDiv() {
        const { article } = this.props;
        if (article.comments) {
            return (<div className="commentBlock">
            <p onClick={this.toogleComments} className="toogleComments" >
            {this.state.showComments ? `hide comments (${article.comments.length})` : `show comments (${article.comments.length})` }
            </p>
            {/*Подобный код лучше в JSX не писать - ужасно читается. Вынеси в переменныую и тут просто вставь ее*/}
            {this.state.showComments?article.comments.map(e=>{
                return (<div key = {e.id} className="comment" >
                            <p>{e.user}</p>
                            <div>{e.text}</div>
                    </div>);
            }):null}

        </div>);
        }else{
            return (<div className="commentBlock">
                <p className="toogleComments" >this article dont have comments</p>
            </div>);
        }

    }

    render() {
        const { article } = this.props;
        const body = this.state.isOpen ? <section>{article.text}{this.commentDiv()}</section> : null;
        return (
            <div>
                <h3 onClick = {this.toogleArticle} >{article.title}</h3>
                {body}                
            </div>
        )
    }

    toogleArticle = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toogleComments = (ev) => {
        this.setState({
            showComments: !this.state.showComments
        })
    }
}
