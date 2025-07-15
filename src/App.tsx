import {useState} from 'react';
import FormInput from "./components/FormInput";
import './App.css';

interface Ivalues {
  first_name: string,
  last_name: string,
  phone_number:string,
  cost_guess:number,
  pin:string

}

function App() {

  const [values, setValues] = useState<Ivalues>({
    first_name: "",
    last_name: "",
    phone_number: "",
    cost_guess: 0,
    pin: "",
  });

 const inputs = [
    {
      id: 1,
      name: "first_name",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "last_name",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "phone_number",
      type: "text",
      placeholder: "(###)###-####",
      errorMessage:"Phone Number should be formatted (###)###-####",
      label: "Phone Number",
      pattern: `\\(\\d{3}\\)\\d{3}\-\\d{4}`,
      required: true,
    },
    {
      id: 4,
      name: "cost_guess",
      type: "number",
      placeholder: "Cost Guess (Dollar amount)",
      errorMessage:
        "Guess should be a number",
      label: "Cost Guess",
      required: true,
    },
    {
      id: 5,
      name: "pin",
      type: "pin",
      placeholder: "PIN",
      errorMessage: "PIN should be formatted ####-####-####-####",
      label: "PIN",
      pattern:`\\d{4}\-\\d{4}\-\\d{4}\-\\d{4}`,
      required: true,
    },
  ];

  const onChange = (e:any) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(values)
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Spidr Fryer Interest Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name as keyof Ivalues]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
