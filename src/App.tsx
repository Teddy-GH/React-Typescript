import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Private } from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { CustomButton } from "./components/html/Button";
import Text from "./components/polymorphic/Text";

function App() {
  const personName = {
    first: "Kale",
    last: "Mar",
  };

  
  return (
    <div className="App">
      {/* <Greet name='Teddy'  isLoggedIn={false}/> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status='loading' />
    <Heading>Placeholder text</Heading>
    <Oscar>
    <Heading>Oscar goes to Leonardo Dicpario!</Heading>
    </Oscar>
    <Button  handleClick={(event, id) => {
       console.log('Button clicked', event, id);
    }}/>
    <Input value='' handleChange={(event) => console.log(event)}/>
    <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}
      {/* <ThemeContextProvider >
      <Box  />
    </ThemeContextProvider> */}
      {/* <UserContextProvider>
      <User />
    </UserContextProvider> */}
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <List
        items={["Mar", "Emi", "Amen"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List
        items={[
          {
            id:1,
          first: 'Mar',
          last: 'Teddy',
        },
        {
          id:2,
          first: 'Emi',
          last: 'Teddy',
        },
        {
          id:3,
          first: 'Amen',
          last: 'Teddy',
        },
      ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <CustomButton variant="primary" onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton> */}
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="someid" size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
