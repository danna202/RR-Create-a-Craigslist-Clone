import Posting from  './Posting'

const Gallery = ({ postings }) => {
       return (
        <div className='gallery'>
           {postings.map((posting, i) => {
                return <Posting key={i} posting={posting}/>
           })}
        </div>
    )
}

export default Gallery