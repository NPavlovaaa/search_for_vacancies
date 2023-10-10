const SetFormat = (value) => {
    switch (value){
        case 'forty':
            return 40000;
        case 'eighty':
            return 80000;
        case 'oneHundred':
            return 100000;
    }
}
export default SetFormat;