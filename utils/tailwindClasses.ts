export const PositiveOrNegativeNumber = (number:number) => {
    return  Number(number) < 0 ? 'text-rose-600' : 'text-green-600'
}