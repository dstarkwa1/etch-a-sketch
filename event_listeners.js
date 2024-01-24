import {gridPrompter, rainbowToggle, eraserToggle, darkenerToggle} from './buttonfunctions.js'
import { colorSelector, alpha_adjustment } from './colorfunctions.js';

export function add_button_event_listeners() {


    let alpha_value = 0;


    let observer = new MutationObserver((mutationList, observer) => {
        if (alpha_value == 0) {
            alpha_value = .1
        }
        alpha_adjustment(mutationList,observer,alpha_value)
        alpha_value = alpha_value + 0.01
    })

    const grid_Modifier = document.querySelector('#grid-modifier')
    grid_Modifier.addEventListener('click', gridPrompter)

    const rainbowButton = document.querySelector("#random_colors")
    rainbowButton.addEventListener('click', () => rainbowToggle(rainbowButton.checked))

    const eraser = document.querySelector("#eraser")
    eraser.addEventListener('click', () => eraserToggle(eraser.checked))

    
    const darkener = document.querySelector("#progressive_darkening")
    darkener.addEventListener('click', () => {
        darkenerToggle(darkener.checked, observer)
        alpha_value = 0
    })

    eraser.addEventListener('click', () => {
        darkenerToggle(eraser.checked==false && darkener.checked == true, observer)
    })

}


export function add_color_event_listeners() {

    const rainbowButton = document.querySelector('#random_colors')
    const eraser = document.querySelector("#eraser")
    const darkener = document.querySelector("#progressive_darkening")

    let mouse_down_flag = false;

    document.addEventListener('mouseup', () => {
        mouse_down_flag = false;
    })

    document.addEventListener('mousedown', (e) => {
        if(e.button === 0) {mouse_down_flag = true;}
    })

    const grid_holder = document.querySelector('#grid_holder')
    for (const child of grid_holder.children) {
        child.addEventListener('mouseover', (e) => 
            {if(mouse_down_flag){
                colorSelector(e.target, rainbowButton.checked, darkener.checked, eraser.checked)
            }
            })
    }

}





