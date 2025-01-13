function embaralharElementos(array: any[]): any[] {
    return array
        .map(elemento => ({elemento, rand: Math.random()}))
        .sort((obj1, obj2) => obj1.rand - obj2.rand)
        .map((obj) => obj.elemento)
}

export {
    embaralharElementos
}