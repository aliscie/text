import init, {mul} from '../pkg/tex.js'
await init()
document.querySelector('#button').onclick = ()=>{
    const one =document.querySelector('#one').value
    const two =document.querySelector('#two').value
    document.querySelector('#res').textContent =mul(one, two)
}