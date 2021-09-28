const addPrivod = (selected, array, zap) => { // selected - объект настроек для выбора привода (количество/высота)

    for (let i = 0; i < array.length; i++) {
        if (array[i].opening === selected.opening
            && selected.height >= array[i].min
            && selected.height <= array[i].max
            && array[i].position === selected.position
            ) {
                const privod = {...array[i]};
                privod.quantity = selected.quantity;
                zap.push(privod);
            }				
    }	

    return zap
}

export {addPrivod};