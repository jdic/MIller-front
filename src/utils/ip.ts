export const setIp = (value: string) =>
{
  localStorage.ip = value
}

//localStorage.ip
export const getIp = () => (new URL(window.location.href)).hostname