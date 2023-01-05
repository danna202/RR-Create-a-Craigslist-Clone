const Posting = ({ posting }) => {
    return (
        <div className='posting'>
            <h1>{posting.title}</h1>
            <p>{posting.description}</p>
            <img src={posting.imageURL} alt='posting' />
        </div>
    )
}

export default Posting