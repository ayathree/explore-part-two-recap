import './Post.css'

export default function Post({post}){
    console.log(post)
    const {body, userId, id, title }= post
    return(
        <div className='body'>
            <p>userID: {userId} </p>
            <p>id: {id} </p>
            <p>title: {title} </p>
            <p>body: {body} </p>
        </div>

    )
}