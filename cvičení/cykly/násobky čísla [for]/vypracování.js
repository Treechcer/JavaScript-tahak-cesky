function nasobkyCisla(nasobek, pocetNasobku){ // přijímáme číslo co budeme násbit a do kolika (kolikrát) budeme násobit
    for (let i = 1; i <= pocetNasobku; i++){ // tady procházíme všechny násobky od 1 do počtu násobků (mohli bychom začít na 0 ale to je vždy stejný výsledek)
        console.log(nasobek * i) // vypíšeme číslo co jsme zadali jako násobek * počet iterace (opakování, které se zvětšuje o 1 vždy)
    }
}

nasobkyCisla(5,10) // zavoláme funkci, vypíše to ty násobky ale nic to nevratí proto nemusíme dávat něco jako : var x = nasobkyCisla(5,10)... neboli tato funkce má pouze vedlejší efekt a nevrací nic