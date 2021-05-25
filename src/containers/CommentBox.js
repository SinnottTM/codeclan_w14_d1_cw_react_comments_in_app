import {useState} from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

// preset comments that appear every time the app loads
const CommentBox = () => {

const [comments, setComments] = useState(
    [
        {
            id: 1,
            author: "Rick James",
            text: "React is a hell of a library"
        },
        {
            id: 2,
            author: "Valerie Gibson",
            text: "I'm dreaming in React"
        }
    ]
)

    const addComment = (submittedComment) => {
        // In lieu of having a db, Date.now() is being used as a placeholder for id
        submittedComment.id = Date.now();
        // Using a js syntax that allows you to add elements to a lists/arrays (combine lists/arrays end to end)
        const updatedComments = [... comments, submittedComment];
        // reset the comments presented to now show all comments, old and updated
        setComments(updatedComments);
    }

    return(
        <>
            <h1>Comments</h1>
            <CommentList comments={comments}/>
            <h2>Add a Comment:</h2>
            <CommentForm onCommentSubmit={
                (comment) => {addComment(comment)}}/>
        </>
    )
}

export default CommentBox;