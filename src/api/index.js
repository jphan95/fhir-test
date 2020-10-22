import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const insertMeasurement = payload => api.post(`/measurement`, payload)
export const getAllMeasurements = () => api.get(`/measurements`)
export const createUser = payload => api.post(`/user`, payload)
export const getUser = (ehr_id) => api.get(`/user/${ehr_id}`)

const apis = {
    insertMeasurement,
    getAllMeasurements,
    createUser,
    getUser
}

export default apis