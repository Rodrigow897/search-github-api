export default function Repositories(props) {
    return(
        <div className='repositores-box'>
            <div id='repositories'>
                <div id='repositories-info' >
                    <h2 className="title-repo" >{props.title}</h2>
                    <p id="description-repo" className="description">{props.description}</p>
                    <p id="last-update" className="last-update">{props.lastUpdate}</p>
                </div>
                <div id='divider2'></div>
            </div>
        </div>
    )
}