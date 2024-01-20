import { animated, useTransition } from "@react-spring/web";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const defaultNames = [
  {
    id: "b1b3efc3-b1b7-4fff-b9d3-0cb3bc684e35",
    name: "English",
  },
  {
    id: "3773fd06-1b91-44ea-bf35-f46efbbd756d",
    name: "French",
  },
  {
    id: "400a44b7-a752-4354-8c34-b5c0a0146cdd",
    name: "German",
  },
  {
    id: "7313e8da-e828-4486-b1fd-091d8ab172e6",
    name: "Chiness",
  },
  {
    id: "d535d134-6352-4645-bca3-e58de15c1f25",
    name: "Arabic",
  },
  {
    id: "62dc19f3-6c95-4e38-9688-9fbb9be951c1",
    name: "Persian",
  },
];
const Practice = () => {
  const refInput = useRef();
  const [nameList, setNameList] = useState([...defaultNames]);
  const transitions = useTransition(nameList, {
    from: { width: "0px" },
    enter: { width: `100px` },
    leave: { width: "0px" },
  });
  const handleAddName = () => {
    const value = refInput.current.value;
    if (value != "") {
      const formatedValue = { id: uuidv4(), name: value };
      setNameList([formatedValue, ...nameList]);
    } else {
      alert("Please type something");
    }
    refInput.current.value = "";
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleAddName();
    }
  };

  return (
    <div className="container">
      <h2 className="title__center">Home page</h2>
      <div className="home__body">
        <div className="home__body__left">
          <div className="form__container">
            <input
              onKeyDown={handleKeyDown}
              ref={refInput}
              type="text"
              className="name"
            />
            <button onClick={handleAddName} className="btn__add">
              Add
            </button>
          </div>
        </div>
        <div className="home__body__right">
          <div className="list__container">
            {transitions((style, item) => {
              return (
                <animated.div className="item" style={style}>
                  {item.name}
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
