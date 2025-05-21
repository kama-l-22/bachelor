import Box from "../box/box.jsx";
import IconedButton from "../button/iconedButton.jsx";
import tempIcon from "../../assets/images/temp.png";
import profile from "../../assets/images/profile.png";
import "./taskPage.scss";
import Button from "../button/button.jsx";
import BasicPie from "../pie/pieChart.jsx";

export default function TaskPage() {
  const content = () => {
    return (
      <div className="home-content">
        <div className="item">
          <div className="icon">
            <img src={profile} alt="image"></img>
          </div>
          <div className="name">Kamal</div>
        </div>
        <div className="item">
          <div className="icon">
            <img src={profile} alt="image"></img>
          </div>
          <div className="name">Kamal</div>
        </div>
        <div className="item">
          <div className="icon">
            <img src={profile} alt="image"></img>
          </div>
          <div className="name">Kamal</div>
        </div>
        <div className="item">
          <div className="icon">
            <img src={profile} alt="image"></img>
          </div>
          <div className="name">Kamal</div>
        </div>
      </div>
    );
  };
  const header = () => {
    return (
      <div className="house-header">
        <h3>House name</h3>
        <div className="house-header-icons">
          <IconedButton
            backgroundColor={"#B6C0A8"}
            icon={tempIcon}
            iconWidth={"25px"}
            iconHeight={"25px"}
          ></IconedButton>
          <IconedButton
            backgroundColor={"#B6C0A8"}
            icon={tempIcon}
            iconHeight={"25px"}
            iconWidth={"25px"}
          ></IconedButton>
        </div>
      </div>
    );
  };
  const todo_header = () => {
    return (
      <div className="todo-header">
        <h2>Our Todo</h2>
        <IconedButton
          backgroundColor={"#B6C0A8"}
          icon={tempIcon}
          iconWidth={"30px"}
          iconHeight={"30px"}
          text={"Add Task"}
          textsize={"20px"}
        ></IconedButton>
      </div>
    );
  };
  const todo_content = () => {
    return (
      <div className="todo-content">
        <div className="todo-item">
          <img src={profile} alt="ima" className="todo-icon"></img>
          <div className="todo-name">Kamal</div>
          <Button
            text={"Check"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"Done"}
            backgroundColor={"#E9F5DB"}
            width={"80px"}
            height={"70%"}
            color="black"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="todo-item">
          <img src={profile} alt="ima" className="todo-icon"></img>
          <div className="todo-name">Kamal</div>
          <Button
            text={"Check"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"Done"}
            backgroundColor={"#E9F5DB"}
            width={"80px"}
            height={"70%"}
            color="black"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="todo-item">
          <img src={profile} alt="ima" className="todo-icon"></img>
          <div className="todo-name">Kamal</div>
          <Button
            text={"Check"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"Done"}
            backgroundColor={"#E9F5DB"}
            width={"80px"}
            height={"70%"}
            color="black"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="todo-item">
          <img src={profile} alt="ima" className="todo-icon"></img>
          <div className="todo-name">Kamal</div>
          <Button
            text={"Check"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"Done"}
            backgroundColor={"#E9F5DB"}
            width={"80px"}
            height={"70%"}
            color="black"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="todo-item">
          <img src={profile} alt="ima" className="todo-icon"></img>
          <div className="todo-name">Kamal</div>
          <Button
            text={"Check"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"Done"}
            backgroundColor={"#E9F5DB"}
            width={"80px"}
            height={"70%"}
            color="black"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="todo-item">
          <img src={profile} alt="ima" className="todo-icon"></img>
          <div className="todo-name">Kamal</div>
          <Button
            text={"Check"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"Done"}
            backgroundColor={"#E9F5DB"}
            width={"80px"}
            height={"70%"}
            color="black"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="todo-item">
          <img src={profile} alt="ima" className="todo-icon"></img>
          <div className="todo-name">Kamal</div>
          <Button
            text={"Check"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"Done"}
            backgroundColor={"#E9F5DB"}
            width={"80px"}
            height={"70%"}
            color="black"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
      </div>
    );
  };

  const done_header = () => {
    return (
      <div className="done-header">
        <div className="done-header-title">
          <h3>Done task</h3>
          <div style={{ fontSize: "16px" }}>
            {" "}
            test to show here will come here test to show here will come here
          </div>
        </div>
        <IconedButton
          backgroundColor={"#B6C0A8"}
          icon={tempIcon}
          iconWidth={"40px"}
          iconHeight={"40px"}
        ></IconedButton>
        <div className="search">
          <img src={tempIcon} alt="temp" />
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
    );
  };
  const done_content = () => {
    return (
      <div className="done-content">
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
        <div className="done-item">
          <div className="done-name">kamal</div>
          <img src={profile} alt="ima" className="done-icon"></img>
          <img src={profile} alt="ima" className="done-icon"></img>
          <Button
            text={"25.02.2023"}
            backgroundColor={"#87986A"}
            width={"120px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
          <Button
            text={"View"}
            backgroundColor={"#87986A"}
            width={"80px"}
            height={"70%"}
            color="#fff"
            style={{ fontSize: "20px" }}
          ></Button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="task_Page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          width={"35%"}
          height={"500px"}
          color={"#b5c99a20"}
          className="opacity100"
          header={header()}
          content={content()}
          style={{
            padding: "20px",
          }}
        ></Box>
        <Box
          width={"55%"}
          height={"500px"}
          color={"#b5c99a25"}
          className="opacity100"
          style={{
            padding: "20px 30px",
          }}
          header={todo_header()}
          content={todo_content()}
        ></Box>
      </div>
      <div className="done-task">
        <div className="done-task-title">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#B6C0A8",
              padding: "10px 20px",
              borderRadius: "10px",
              width: "40%",
              color: "white",
            }}
          >
            {" "}
            <h2>List work done and it’s Piechart</h2>
          </div>
          <div className="done-task-content">
            <Box
              width={"55%"}
              height={"80vh"}
              color={"#97A97C25"}
              className="opacity100"
              style={{
                padding: "20px 30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              header={done_header()}
              content={done_content()}
            ></Box>
            <Box
              width={"35%"}
              height={"80vh"}
              color={"#97A97C25"}
              style={{
                padding: "20px 30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              content={<BasicPie />}
            ></Box>
          </div>
        </div>
      </div>
    </>
  );
}
