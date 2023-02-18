export const positiveOrNegativeNumber = (number: number) => {
    return Number(number) < 0 ? 'text-rose-600' : 'text-green-600'
}

export const prettierPercentage = (number: number) => {
    if (String(number).includes('.')) {
        const commaSeperated = String(number).split('.')
        if (commaSeperated[0].length < 4 && commaSeperated[1].length < 3) {
            return number
        } else {
            return commaSeperated[0] + '.' + commaSeperated[1].slice(0, 2)
        }
    }else {
        return number
    }
}