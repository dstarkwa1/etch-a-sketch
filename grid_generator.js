
import {add_color_event_listeners} from './event_listeners.js'
import { rainbowToggle } from './buttonfunctions.js'

export function generate_grid(grid_size = 16){
    delete_grid()
    const gridContainer = document.querySelector('#grid_holder')
    const rainbowButton = document.querySelector('#random_colors').checked

    for (let i = 0; i < grid_size; i++) {

            let rowRef = 'rowRef'.concat(i.toString())
            
            const divRow = document.createElement('div');
            
            divRow.setAttribute('id', rowRef)
            divRow.classList.add("row_style")
            gridContainer.appendChild(divRow)
            

        for (let j = 0; j < grid_size; j++) {

           
            let colRef = 'colRef'.concat(j.toString())

            const divCol = document.createElement('div');
            divCol.setAttribute('id', rowRef.concat(colRef))
            divCol.classList.add("col_style")
            divRow.appendChild(divCol)
            
            

        }
    }
    add_color_event_listeners(rainbowToggle(rainbowButton))

}

function delete_grid(){

    const gridContainer = document.querySelector('#grid_holder')

    while (gridContainer.firstChild){

        gridContainer.removeChild(gridContainer.firstChild)
    }
}

