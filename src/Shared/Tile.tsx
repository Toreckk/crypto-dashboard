import "./Tile.scss";

interface IProps {
    children: any
}

export function SelectableTile({children}: IProps){
    return (
        <div className="tile-selectable">
            <div className="tile">
                {children}
            </div>
        </div>
        
    );
}

export function DeletableTile({children}: IProps){
    return (
        <div className="tile-deletable">
            <div className="tile">
                {children}
            </div>
        </div>
        
    );
}

export function DisabledTile({children}: IProps){
    return (
        <div className="tile-disabled">
            <div className="tile">
                {children}
            </div>
        </div>
        
    );
}