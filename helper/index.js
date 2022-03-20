export const movieDescription = (str) => {
    if (str) {
        const strLen = str.split('').length
        if (strLen > 350) {
            return str.substring(0, 350) + '...'
        } else if (strLen <= 350 && strLen > 1) {
            return str
        } else {
            return 'Bu film için açıklama bulunmamaktadır.'
        }
    }
}

export const vote = (str) => {
    if (str >= 8) {
        return 'bg-lime-500'
    } else if (str >= 5) {
        return 'bg-amber-300'
    } else {
        return 'bg-red-500'
    }
}

