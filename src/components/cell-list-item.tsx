import { Cell } from '../state'

interface CellListItemProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
    return <div>Cell CellListItem</div>
}

export default CellListItem;