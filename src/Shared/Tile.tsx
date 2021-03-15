import "./Tile.scss";

interface IProps {
    children: any,
    onClick?: () => void;
    className?:String
}

export function SelectableTile({children, onClick, className}: IProps){
    return (
        <div className={`tile-selectable ${className}`} onClick={onClick}>
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