import "./detail.css";

const Detail = () => {
    return (
        <div className="detail">
             <div className="user">
                <img src="public/Talk with your Buddy.png" alt="" />
                <h2>Priya Kacha</h2>
                <p>Hello..., How are You... What are you doing ?</p>
                </div>
                <div className="info">
                     <div className="option">
                        <div className="title">
                            <span>Chat Settings</span>
                            <img src="./arrowUp.png" alt="" />
                        </div>
                     </div>

                     <div className="option">
                        <div className="title">
                            <span>Chat Settings</span>
                            <img src="./arrowUp.png" alt="" />
                        </div>
                     </div>

                     <div className="option">
                        <div className="title">
                            <span>Privacy & help</span>
                            <img src="./arrowUp.png" alt="" />
                        </div>
                     </div>

                     <div className="option">
                        <div className="title">
                            <span>Shared photos</span>
                            <img src="./arrowDown.png" alt="" />
                        </div>
                        <div className="photos">
                            <div className="photoItem">
                                <div className="photoDetail">
                                <img src="public/Talk with your Buddy.png" alt="" />
                                <span>Photo_2025_2.png</span>
                                </div>
                              <img src="./download.png" alt="" className="icon"/>
                            </div>

                            <div className="photoItem">
                                <div className="photoDetail">
                                <img src="public/Talk with your Buddy.png" alt="" />
                                <span>Photo_2025_2.png</span>
                                </div>
                              <img src="./download.png" alt="" className="icon"/>
                            </div>

                            <div className="photoItem">
                                <div className="photoDetail">
                                <img src="public/Talk with your Buddy.png" alt="" />
                                <span>Photo_2025_2.png</span>
                                </div>
                              <img src="./download.png" alt="" className="icon"/>
                            </div>

                            <div className="photoItem">
                                <div className="photoDetail">
                                <img src="public/Talk with your Buddy.png" alt="" />
                                <span>Photo_2025_2.png</span>
                                </div>
                              <img src="./download.png" alt="" className="icon"/>
                            </div>
                        </div>
                     </div>

                     <div className="option">
                        <div className="title">
                            <span>Shared Files</span>
                            <img src="./arrowUp.png" alt="" />
                        </div>
                     </div>    
                    <button>Block User</button>
                </div>
             </div>
    )
}

export default Detail ;