import "../../App.css";

export default function Collaborator() {
    return (
        <>
            <div className="container">
                <h1> Add collaborator </h1>
                <form>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" placeholder="Enter name" id="name" />

                    <label htmlFor="address"> Address: </label>
                    <input type="text" placeholder="Enter address" id="address" />

                    <label htmlFor="phone"> Mobile number: </label>
                    <input type="text" placeholder="Enter mobile number" id="phone" />

                    <label htmlFor="amount"> Amount: </label>
                    <input type="text" placeholder="Enter amount" id="amount" />

                    <button type="submit"> Add collaborator </button>
                </form>
            </div>
        </>
    )
}