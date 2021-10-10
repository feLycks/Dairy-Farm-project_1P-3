const totalShades = []

// const total = {
const shades = {
    id: Date.now(),
    shadeOne: document.getElementById('shade-1').value,
    shadeTwo: document.getElementById('shade-2').value,
    shadeThree: document.getElementById('shade-3').value,
    shadeFour: document.getElementById('shade-4').value,
    // btn: document.getElementById('btn').value
}
totalShades.push(shades);

document.addEventListener('DomContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', totalShades)
})

console.log(shades);