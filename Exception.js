try {
    const dividend = 1;
    const divider = 0;
    if (dividend / divider) {
        throw (e);
    }
}
catch (e) {
    console.log('You can not divide by zero!');

}