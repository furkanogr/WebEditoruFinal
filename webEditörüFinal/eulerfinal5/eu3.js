function* range(start, stop, step){
    if (arguments.length == 0){
        start = 0;
        stop = null;
    }
    if (arguments.length == 1){
       stop = start;
       start = 0;
    }
    if (arguments.length < 3)
        step = 1;

    start = parseInt(start);
    if (Number.isNaN(start))
        start = 0;
    stop = parseInt(stop);
    if (Number.isNaN(stop))
        stop = null;
    step = parseInt(step);
    if (Number.isNaN(step))
        step = 1;

    if (stop === null){
        while (true){
            yield start;
            start += step;
        }
    }else if (step == 0){
        while (true){
            yield start;
        }
    }else{
        if (step > 0){
            for (var number = start; number < stop; number += step){
                yield number;
            }
        }else{
            for (var number = start - 1; number >= stop; number += step){
                yield number;
            }
        }
    }
}

function is_palindrome(string){
    var str_len = string.length - 1;
    for (var index of range(string.length / 2)){
        if (string[index] != string[str_len - index]){
            return false;
        }
    }
    return true;
}

function reverse(string){
    var new_string = '';
    for (var index of range(string.length, 0, -1)){
        new_string += string[index];
    }
    return new_string;
}

function is_lychrel(number, recursions){
    if (recursions == 0)
        return false;
    if (arguments.length == 1)
        recursions = 50;
    number += parseInt(reverse(number.toString()));
    if (is_palindrome(number.toString()))
        return true;
    return is_lychrel(number, recursions - 1);
}

function main(){
    var total = 0;
    for (var number of range(10000)){
        if (! is_lychrel(number)){
            total += 1;
        }
    }
    return total;
}

console.log(main());