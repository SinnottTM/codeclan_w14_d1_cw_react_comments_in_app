const Comment = ({author, children}) => {
    return (
        <>
            <h4>{children}</h4>
            <p>{author}</p>
        </>
    )
}

export default Comment;