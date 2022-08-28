//https://www.youtube.com/watch?v=bhfpVl1OWCo

let data
let barWidth
let barHeight
let allDataTemp
let b1
let b2
let b3
let b4
let maxElement
let minElement

function preload(){
    data = loadJSON('data/global-annual-means.json')
}

function setup(){
    createCanvas(windowWidth, windowHeight)   
    allDataTemp = data.arrTemperatures.map(d => {
        return d.global
    })
    console.log(allDataTemp)
    maxElement = max(allDataTemp)
    minElement = min(allDataTemp)
    console.log(minElement)
    minColor = color(255)
    blueMax = color(2,44,107)
    redMax = color(104,0,5)

}

function draw(){
    background(220)
    for(let i = 0; i < data.arrTemperatures.length; i++){
    barWidth =  width / data.arrTemperatures.length
    barHeight = height
    let x = barWidth * i
    let y = 0
  
    let cant = map(allDataTemp[i], minElement, maxElement, 0.3, 0.9)

     if (allDataTemp[i] > 0){
        let colorRed = lerpColor(minColor, color("red"), cant)
        fill(colorRed)        
    } else {
        let colorBlue = lerpColor(minColor, color("blue"), cant) 
        fill(colorBlue)
    }
    noStroke()
    rect(x, y, barWidth, barHeight)
    }
}
