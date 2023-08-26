const numbers = [5,3,1,2,7];

// const bubbleSort = (arr) => {
//     let temp;

//     for (let i = 0; i < arr.length; i++) {
//         temp = arr[i];
//         // console.log(temp);
//         // console.log(arr[i + 1]);
//         if (arr[i + 1] < temp) {
//             // console.log(arr[i + 1]);
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;   
//         }
//     }
//     return arr;
// };

// console.log(bubbleSort(numbers));

const bubbleSortDoWhile = (arr) => {
    let temp; 
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            // si en algun momento de toda la iteracion se ccumple esta condicion aunque sea solo 1 vez es suficiente para reinicializar todo el pasaje
            if (arr[i] > arr[i + 1]) {
                // swap elements
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
};


console.log(bubbleSortDoWhile(numbers));

// const arr = [8,7,6,5,4,3,2,1];

// const reversedArray = (nums) => {
//     let temp;
//     for (let i = 0; i < nums.length / 2; i++) {
//         console.log(nums[i]);
//         temp = nums[i];
//         nums[i] = nums[nums.length -1 - i];
//         nums[nums.length -1 - i]  = temp;
//     }
//     return nums;
// };

// console.log(reversedArray(arr));