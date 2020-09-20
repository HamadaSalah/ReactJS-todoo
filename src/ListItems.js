import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ListItems (props) {
    const items = props.items;
    let ListItems  = items.map(item => {
        return(
            <div className='list' key={item.key} >
                <p>{item.text}
                <span><FontAwesomeIcon icon="trash" className='faicons' onClick={() => {
                    props.deleteItem(item.key)
                }}/></span>               
                 </p>
                
            </div>
            )
    })
    return(
        <div>
            {ListItems}
        </div>
    )
}
export default ListItems