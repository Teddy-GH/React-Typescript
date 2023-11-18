import { PersonProps } from "../types/Person.types"

export const Person =({name:{first, last}}: PersonProps) => {
  return <div>{first}{last}</div>
}