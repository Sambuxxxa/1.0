import Cap from './Cap/Cap'
import CreatePost from "./MyPosts/CreatePost/CreatePost";
import m from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
        return (
            <div className={m.Main}>
                <Cap />
                <CreatePost />
                <hr className={m.Hr}/>
                <MyPosts />
            </div>
        );
}

export default Profile;