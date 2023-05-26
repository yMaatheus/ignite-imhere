export function getDateNow() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions
  const str = new Date().toLocaleDateString('pt-br', options)
  return str.charAt(0).toUpperCase() + str.slice(1)
}