import Auth from "../../components/Auth/Auth";

export default function SignInPage({isLoggedIn}) {
    return (
        <div>
            <Auth authType="signin" isLoggedIn={isLoggedIn}/>
        </div>
    )
}
