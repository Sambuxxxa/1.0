import m from './CreatePost.module.css'

function CreatePost() {
    return (
        <div className={m.NewPost}>
            <h3 className={m.Text}>New post</h3>
            <img className={m.ProfileLogo} src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png" alt="" />
            <input type="text" className={m.MainInput} placeholder='Что нового...' /> <button className={m.Button}>Create</button>
        </div>
    );
}

export default CreatePost;