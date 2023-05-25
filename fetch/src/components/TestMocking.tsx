import React, { useState } from "react";

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

export const TestMocking: React.FC = (): JSX.Element => {
  const [data, setData] = useState({ people: [] });
  const [error, setError] = useState("");

  const url =
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react";

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        setData(json.data);
      })
      .catch((error) => {
        setError(`Somthing Wrong: ${error}`);
      });
  };

  const handleClick2 = () => {
    fetch("/login")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기2</button>
      {data && (
        <ul>
          {data.people.map((person: { name: string; age: number }) => (
            <Item
              key={`${person.name} - ${person.age}`}
              name={person.name}
              age={person.age}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
