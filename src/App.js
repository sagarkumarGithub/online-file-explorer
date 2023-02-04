import { useState } from "react";
import "./App.css";
import DialogBox from "./components/DialogBox";
import List from "./components/List";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";


function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      // deal with editing
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      setOpen(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        folder: folder,
      };
      setList([...list, newItem]);
      setName("");
      setFolder(false);
    }
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setOpen(true);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  return (
    <div style={{ padding: 5, margin: "80px 160px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 30 }}>
          <ArrowCircleLeftRoundedIcon style={{ color: "grey", marginTop: 5 }} />
          <p style={{ marginLeft: 15 }}>root</p>
        </div>
        <hr />
      </div>
      <div style={{ display: "flex", gap: 50, margin: "30px 80px" }}>
        <div>
          <List
            items={list}
            removeItem={removeItem}
            editItem={editItem}
            setOpen={setOpen}
            folder={folder}
          />
        </div>
        <DialogBox
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          isEditing={isEditing}
          open={open}
          setOpen={setOpen}
          folder={folder}
          setFolder={setFolder}
        />
      </div>
    </div>
  );
}

export default App;
