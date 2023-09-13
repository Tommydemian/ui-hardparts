const numbers = [1,2,5,9,3,6,4,8,7];

const sortNumbers = (arr: number[]) => {
    let temp:number;

    for (let i = 0; i < arr.length; i++) {
        temp = arr[i];
        if (arr[i] + 1 < temp) {
            arr[i] = arr[i] + 1; 
        }
    }
};

console.log(sortNumbers(numbers));

