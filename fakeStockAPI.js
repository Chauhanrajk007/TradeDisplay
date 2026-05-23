export function getStockData(){
return{
Name:'QuantumAI',
Symbol:'QAI',
Price:(Math.random()*3).toFixed(2),
Time: new Date().toLocaleTimeString()
}
}
