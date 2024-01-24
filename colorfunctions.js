import {add_remove_observer} from './buttonfunctions.js'

export function colorSelector(element, isRainbow=false, isDarkened=false, isEraser=false, alpha=0) {

    let redrand = Math.floor(Math.random() * 255)
    let greenrand = Math.floor(Math.random() * 255)
    let bluerand = Math.floor(Math.random() * 255)

    if (isRainbow && isDarkened){

        element.style.backgroundColor = `rgb(${redrand},${greenrand},${bluerand}, ${alpha})`

    } else if (isRainbow) {
    
        element.style.backgroundColor = `rgb(${redrand},${greenrand},${bluerand})`
    
    } else if (isDarkened) {

        element.style.backgroundColor = `rgb(0,0,0, ${alpha})`
    
    } else if (isEraser) {

        element.style.backgroundColor = 'white'

    } else {

        element.style.backgroundColor = 'black'

    }
}


export function alpha_adjustment(MutationList,observer,alpha_value) {

    let mutation = MutationList[0]

    let divSelected = document.querySelector(`#${mutation.target.id}`)
    let ischecked_random = document.querySelector('#random_colors').checked

    add_remove_observer(false,observer)
    colorSelector(divSelected, ischecked_random, true, false, alpha_value)
    add_remove_observer(true,observer)

    }