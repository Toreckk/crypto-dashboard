import "./Tile.scss";

interface IProps {
    children: any,
    onClick: () => void;
}

export function SelectableTile({children, onClick}: IProps){
    return (
        <div className="tile-selectable" onClick={onClick}>
            <div className="tile">
                {children}
            </div>
        </div>
        
    );
}

export function DeletableTile({children, onClick}: IProps){
    return (
        <div className="tile-deletable" onClick={onClick}>
            <div className="tile">
                {children}
            </div>
        </div>
        
    );
}

export function DisabledTile({children, onClick}: IProps){
    return (
        <div className="tile-disabled" onClick={onClick}>
            <div className="tile">
                {children}
            </div>
        </div>
        
    );
}