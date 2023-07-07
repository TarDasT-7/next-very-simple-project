const WebSiteLayout = ({ children }) => {

    return(
        <div className="row my-1 py-3 bg-dark">
            <div className="col-1"></div>
            <div className="col-10">{children}</div>
            <div className="col-1"></div>
        </div>
    )

}
export default WebSiteLayout;