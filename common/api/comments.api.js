import { deleteRequest, getRequest } from "../request"


export const commentsAllData = () => {
    return getRequest('comments')
}

export const deleteData = () => {
    return deleteRequest('comments')
}