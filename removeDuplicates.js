const nums = [1,2,3,2,5,5,7,1,9];

const removeDuplicates = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.some(el => el === arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(removeDuplicates(nums));
