function tell(){
   var  start = document.getElementById('n1')
   var  End = document.getElementById('n2')
   var  interval = document.getElementById('i1')
   var res = document.getElementById('res')
    if (start.value.length == 0) {
        window.alert("O campo 'Início' precisa ser digitado!")
        res.innerHTML = ("Impossível calcular!")
    } else if (End.value.length == 0) {
        window.alert("O campo 'Fim' precisa ser digitado!")
        res.innerHTML = ("Impossível calcular!")
    } else if (interval.value.length == 0) {
        window.alert ("O campo 'Intervalo' precisa ser digitado!")
        res.innerHTML = ("Impossível calcular!")
    } else  {
        res.innerHTML = ('Couting: <br> ')
        var i = Number(start.value)
        var f = Number(End.value)
        var p = Number(interval.value)
    } if (i > f) {
        // Increasing Count
        for( var c = i; c >=f ; c = c -=  p ){
            res.innerHTML +=  `${c} `} 
        }else{
            // Countdown
    for( var c = i; c <=f ; c = c +=  p ){
        res.innerHTML +=  `${c} ` 
        }
    }
                
        }
