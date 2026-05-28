import { useState } from "react";
import "./App.css";

function App() {
  const [itemList, setItemList] = useState([]);
  return (
    <>
      <Logo />
      <Form itemList={itemList} setItemList={setItemList} />
      <PackagingList itemList={itemList} setItemList={setItemList} />
      <Footer itemList={itemList} />
    </>
  );
}

export default App;

const Logo = () => {
  return (
    <header
      style={{
        backgroundColor: "#ed9630",
        padding: "20px",
        textAlign: "center",
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "45px",
        }}
      >
        Far Away
      </h1>
    </header>
  );
};

const Form = ({ itemList, setItemList }) => {
  const [itemNumber, setItemNumber] = useState(1);
  const [itemData, setItemData] = useState("");

  const changeHandler = (value) => {
    setItemData(value);
  };

  const selectHandler = (value) => {
    setItemNumber(value);
  };

  // const addHandler = () => {
  //   const newList = [...itemList];

  //   newList.push({ number: itemNumber, data: itemData });

  //   setItemList(newList);
  // };

  const addHandler = (e) => {
    e.preventDefault();

    const newList = [...itemList];

    newList.push({
      id: Date.now(),
      number: itemNumber,
      data: itemData,
      isPacked: false,
    });

    setItemList(newList);
  };

  return (
    <form id="form">
      <p>What do you need for your trip??</p>
      <select name="" id="" onChange={(e) => selectHandler(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <input
        type="text"
        placeholder="item..."
        onChange={(e) => changeHandler(e.target.value)}
      />
      <button onClick={addHandler}>Add</button>
    </form>
  );
};

const PackagingList = ({ itemList, setItemList }) => {
  return (
    <div id="packagingList">
      <div id="itemList">
        {itemList?.map((item) => (
          <Item item={item} itemList={itemList} setItemList={setItemList} />
        ))}
      </div>
      <div id="buttons">
        <select name="" id="">
          <option value="">Sort by Input Order</option>
          <option value="">Sort by Description</option>
          <option value="">Sort by Packed Status</option>
        </select>
        <button onClick={() => setItemList([])}>Clear List</button>
      </div>
    </div>
  );
};

const Footer = ({ itemList }) => {
  return (
    <div
      style={{
        backgroundColor: "#6CC1A3",
        padding: "20px",
        fontSize: "20px",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        You have {itemList.length} items on your list, and you already packed{" "}
        {itemList.filter((item) => item.isPacked).length} (
        {Math.round(
          (itemList.filter((item) => item.isPacked).length / itemList.length) *
            100 || 0,
        )}
        % )
      </p>
    </div>
  );
};

const Item = ({ item, itemList, setItemList }) => {
  const checkHandler = (bool) => {
    const newArr = itemList.map((singleItem) => {
      return singleItem.id === item.id
        ? {
            ...item,
            isPacked: bool,
          }
        : singleItem;
    });

    setItemList(newArr);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        onChange={(e) => checkHandler(e.target.checked)}
        type="checkbox"
        style={{ width: "25px", height: "25px" }}
      />
      <p
        style={{
          textDecoration: item.isPacked ? "line-through" : "none",
        }}
      >
        {item.number}-{item.data}
      </p>
      <button>X</button>
    </div>
  );
};
