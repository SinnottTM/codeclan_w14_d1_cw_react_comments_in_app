import Comment from './Comment'

const CommentList = ({comments}) => {

    const commentNodes = comments.map(comment => {
        return(
            <Comment author={comment.author}>{comment.text}</Comment>
        )
    })

    return(
        <>
            {commentNodes}
        </>
    )
}

export default CommentList;