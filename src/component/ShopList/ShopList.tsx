import ShopListIteam from "../ShopListIteam/ShopListIteam"
import { IShop } from "../../types"
import { FC } from "react"

interface ITodoListPops {
    shops: IShop[],
    onDelete: (id: number) => void
}

const ShopList: FC<ITodoListPops> = (props) => {
   
    return (
        <table >
        <tr>
          <th>Название магазина</th>
          <th>Время открытия</th>
          <th>Времия закрытия</th>
          <th>Удаленность</th>
          <th>Важность</th>
          <th>Удалить</th>
        </tr>
        
        {props.shops.map(item => (
                <ShopListIteam key={item.id} {...item}
                onDeleteClick={() => props.onDelete(item.id)}
                />))}
        

      </table>
    )
}
export default ShopList