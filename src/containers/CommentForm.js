import {useState} from 'react';

const CommentForm = ({onCommentSubmit}) => {

//  Set author and text fields to empty strings (or placeholder value below)
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

//  
    const handleAuthorChange = (evt) => {
        setAuthor(evt.target.value)
    }

     const handleTextChange = (evt) => {
        setText(evt.target.value)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        // .trim() removes excess white space
        const authorToSubmit = author.trim();
        const textToSubmit = text.trim();
        if (!authorToSubmit || !textToSubmit){
            return
        }

//      Update comments in CommentBox
        onCommentSubmit({
            author: authorToSubmit,
            text: textToSubmit
        })

//      Resets text fields
        setAuthor("");
        setText("");
    }

//  return the form for submission, with onChange and onSubmit fields
    return(
        <form className="comment-form" onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder="Your Name"
            value={author}
            onChange={handleAuthorChange}
            />
            <input
            type="text"
            placeholder="Your Comment"
            value={text}
            onChange={handleTextChange}
            />
            <input
            type="submit"
            value="post"
            />
        </form>
    )
}

export default CommentForm;