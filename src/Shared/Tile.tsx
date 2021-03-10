import "./Tile.scss";

interface IProps {
    children: any
}

function Tile({children}: IProps){
    return (
        <div className="tile-selectable">
            <div className="tile">
                {children}
            </div>
        </div>
        
    );
}

export default Tile;