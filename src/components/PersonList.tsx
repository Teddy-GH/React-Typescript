import { Name } from "../types/Person.types"

type PersonListProps = {
 names : Name[]
}

export const PersonList = ({names}:PersonListProps) =>{
    return (
        <div>
           {names.map(person => (
            <h2 key={person.first}>{person.first} {person.last}</h2>
           ))}
        </div>
    )
}