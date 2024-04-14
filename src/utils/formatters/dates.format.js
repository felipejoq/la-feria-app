// CL date format day number, de month name, year number
export const formatDate = ({date}) => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return new Intl.DateTimeFormat('es-CL', options).format(new Date(date));
}