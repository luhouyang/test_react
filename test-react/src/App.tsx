import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Click X to dismiss</Alert>}
      <Button
        color="primary"
        onClick={() => setAlertVisibility(true)}
      >
        Button 1
      </Button>
    </div>
  );
}

export default App;

// import Alert from "./components/Alert";

// function App() {

//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

// export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["aaaaaaaa", "bbbbbbbbb", "ccccccccccccc", "ddddddddddd", "eeeeeeeeee"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return (
//     <div>
//       <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
//     </div>
//   );
// }

// export default App;
