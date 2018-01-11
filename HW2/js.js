(function () {
    'use strict';
    function func() {
        let array = [...arguments];
        let array_of_names = array[array.length - 1].split(' ');
        array.length -= 1;
        let interval = 0;
        if (array.length < array_of_names.length) {
            let number = array[array.length - 1];
            for (let k = array.length; k < array_of_names.length; k++) {
                array[k] = number;
            }
        }
        if (array.length > array_of_names.length) {
            array.length = array_of_names.length;
        }
        for (let i = 0; i < array.length; i++) {
            interval += array[i];
            setTimeout(function () {
                console.log(array_of_names[i])
            }, interval * 1000);
        }
    }
    func(2, 5, 6, 8, 1, 'Карл у Клары украл кораллы , Клара у Карла украла кларнет');
}());