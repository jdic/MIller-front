import axios from 'axios'

const ip = '192.168.39.50'//window.location.host

export const sendSpeed = async (speed: number) =>
{
  axios.post(`http://${ip}/speed?speed=${speed}`)
}

export const sendStatus = async (status: number) =>
{
  axios.post(`http://${ip}/status?status=${status}`)
}

export const sendDirection = async (direction: number) =>
{
  axios.post(`http://${ip}/direction?direction=${direction}`)
}