const totalPrice = ({ price, discount, isInstallment, months }: {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
} ): number => {
    let newPrice = (price - price / 100 * discount)
    if (isInstallment) {
        newPrice = newPrice / months
    }
    return newPrice
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250