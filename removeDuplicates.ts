type PotentialDuplicates = Array<string | number>

const nums = [1,2,3,4,5,1,7,8,3,10];

const removeDuplicates = (arr: PotentialDuplicates ) => {
    const noDuplicates: PotentialDuplicates = []; 

    for (const val of arr) {
        if (noDuplicates.indexOf(val) !== -1) {
            noDuplicates.push(val);
        }
    }
    return noDuplicates;
};

removeDuplicates(nums);