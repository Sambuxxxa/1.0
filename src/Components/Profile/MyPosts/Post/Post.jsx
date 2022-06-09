import m from './Post.module.css'

function Post(props) {
    return (
        <div className={m.Post}>
            <img className={m.ProfileLogo} src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png" alt=""/>
            <a href="#s" className={m.ProfileNick}>Sambuxxxa</a> <small className={m.Data}>07.06.2022</small>
            <p className={m.MainText}> {props.message} </p>
        </div>
    );
}

export default Post;
