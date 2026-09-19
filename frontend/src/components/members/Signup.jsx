import "../../App.css";

export default function Signup() {
    return (
        <>
            <div className="container">
                <h1> Sign Up </h1>
                <form>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" placeholder="Enter your name" id="name" />

                    <label htmlFor="phone"> Phone: </label>
                    <input type="text" placeholder="Enter your mobile number" id="phone" />

                    <label htmlFor="username"> Username: </label>
                    <input type="text" placeholder="Enter username" id="username" />

                    <label htmlFor="password"> Create new password: </label>
                    <input type="text" placeholder="Enter new password" id="password" />

                    <label htmlFor="cnf_pass"> Confirm password: </label>
                    <input type="text" placeholder="Again enter password" id="cnf_pass" />

                    <button type="submit"> Sign Up </button>
                </form>
            </div>
        </>
    )
}