const getFormData = (event: any) => {
    const data: any = new FormData(event.target);

    return [...data.entries()].reduce((acc, curr) => {
        acc[curr[0]] = curr[1]
        return acc
    },{})
}

export default getFormData