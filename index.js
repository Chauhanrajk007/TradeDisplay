import{getStockData} from './fakeStockAPI.js'

setInterval(function(){
const stockData=getStockData()
render(stockData)
}, 1500)

let prevPrice=null

function render(stockData){
const nameEl=document.getElementById('name')
const symbolEl=document.getElementById('symbol')
const priceEl=document.getElementById('price')
const priceiconEl=document.getElementById('icon')
const timeEl=document.getElementById('time')

const {Name,Symbol,Price,Time}=stockData

const iconD=Price>prevPrice?'green.webp':Price<prevPrice?'red.webp':'grey.webp'
priceiconEl.src=`svg/${iconD}`
priceiconEl.alt='Arrow'

nameEl.innerText=Name
symbolEl.innerText=Symbol
priceEl.innerText=Price
timeEl.innerText=Time

prevPrice=Price
}