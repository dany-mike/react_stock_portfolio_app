import Auth from "../../components/Auth/Auth";

export default function SignInPage({isLoggedIn}) {
    console.log(isLoggedIn)
    return (
        <div>
            <Auth authType="signin" isLoggedIn={isLoggedIn}/>
        </div>
    )
}
