
import {add_color_event_listeners} from './event_listeners.js'
import {generate_grid} from './grid_generator.js'

export function gridPrompter() {
    let grid_size = parseInt(prompt('Please select the grid size (# of squares per side)'))

        while(isNaN(grid_size) || grid_size > 100 || grid_size <= 0){
            grid_size = Number(prompt('Please select a grid size smaller than 100 and greater than 0.'))
        }
        
        generate_grid(grid_size)
    }

export function rainbowToggle(ischecked){

    
    if (ischecked) {
        
        add_color_event_listeners()
        uncheckButtons(false)
        return true

    } else {

        add_color_event_listeners()
        return false

    }

}

export function eraserToggle(ischecked){

    
    if (ischecked) {
        
        add_color_event_listeners()
        uncheckButtons(true)
        return true

    } else {

        add_color_event_listeners()
        return false

    }

}

export function darkenerToggle(ischecked, observer){

    if (ischecked) {

        add_remove_observer(true, observer)
        uncheckButtons(false)

        return true

    } else {

        add_remove_observer(false, observer)
        return false

    }

}

export function add_remove_observer(boolean, observer) {

    const divholder = document.querySelector("#grid_holder");
   
    let obs_options = {

        subtree: true,
        attributes: true
    }

    if(boolean === true){

        observer.observe(divholder,obs_options)

    } else if (boolean == false) {

        observer.disconnect()

    }
}

function uncheckButtons(isEraser){

    if (isEraser) {
        document.querySelector('#random_colors').checked = false;
        document.querySelector('#progressive_darkening').checked = false;

    }

    else {
        document.querySelector('#eraser').checked = false;
    }
}
