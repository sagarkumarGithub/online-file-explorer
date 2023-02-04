import folderIcon from "../icons/clipart684867.png";
import fileIcon from "../icons/Document-icon.png";
import { Box, Button, ButtonGroup, styled } from "@mui/material";

const Image = styled("img")`
  height: 50px;
  width: 50px;
`;

const FolderWrapper = styled("Box")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = ({ items, removeItem, editItem, setOpen, folder }) => {
  const handleEdit = (id) => {
    setOpen(true);
    editItem(id);
  };
  return (
    <div style={{ display: "flex", gap: 50 }}>
      {items.map((item) => {
        const { id, title, folder } = item;
        return (
          <div key={id} style={{textAlign:"center"}}>
            <FolderWrapper>
              <div>
                <Image src={folder ? folderIcon : fileIcon} alt="icon" />
              </div>
              <div style={{ textAlign: "center" }}>{title}</div>
            </FolderWrapper>

            <ButtonGroup
              style={{ marginTop: 8 }}
              variant="outlined"
              orientation="vertical"
              size="small"
            >
              <Button onClick={() => handleEdit(id)}>Rename</Button>
              <Button style={{ color: "red" }} onClick={() => removeItem(id)}>
                Delete
              </Button>
            </ButtonGroup>
          </div>
        );
      })}
    </div>
  );
};

export default List;
