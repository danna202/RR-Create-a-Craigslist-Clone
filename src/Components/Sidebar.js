import Help from './Help'

const liStyle ={
    'display': 'inline',
    'margin': '2px',
    'padding': '1px',
    'border': '1px solid black'

}

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <h3>Listings</h3>
            <div>
                <ul>
                    <li style={liStyle}>all</li>
                    <li style={liStyle}>owner</li>
                    <li style={liStyle}>dealer</li>
                </ul>
            </div>
            <Help/>
        </div>
    )
}

export default Sidebar