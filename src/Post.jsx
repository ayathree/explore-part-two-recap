import './Post.css'

export default function Post({post}){
    console.log(post)
    const {body, userID, id, title }= post
    return(
        <div className='body'>
            <p>userID: {userID} </p>
            <p>id: {id} </p>
            <p>title: {title} </p>
            <p>body: {body} </p>
        </div>

    )
}