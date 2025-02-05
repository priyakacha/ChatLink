import "./addUser.css"

const AddUser = () => {
    return(
        <div className="addUser">
           <form>
            <input type="text" placeholder="Username" name="username" />
            <button>Search</button>
           </form>
           <div className="user">
            <div className="detail">
                <img src="public/Talk with your Buddy.png" alt="" />
                <span>Priya Kacha</span>
            </div>
            <button>Add User</button>
           </div>
        </div>
    )
}

export default AddUser