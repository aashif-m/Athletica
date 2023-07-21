const colors = ['black', 'white', '#4B8002', '#C0C0C0'];
let indexColour=0
document.getElementById('click').addEventListener('click',()=>{
    console.log('Button clicked');
    indexColour=(indexColour+1)%colors.length;

    document.body.style.backgroundColor = colors[indexColour]
});
