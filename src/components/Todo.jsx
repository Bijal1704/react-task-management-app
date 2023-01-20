import React, { useState } from "react";

const Todo = () => {
  const [showForm, setshowform] = useState(false);
  const [showNew, setshowNew] = useState(true);
  const [showDelete, setshowDelete] = useState(true);
  const [toggleSubmit, settoggleSubmit] = useState(true);
  const [isEditItem, setisEditItem] = useState(null);
  const [showList, setshowList] = useState(true);

  //   const [addMessage, setaddMessage] = useState('')
  const [editMessage, seteditMessage] = useState(false);
  const [deleteMessage, setdeleteMessage] = useState(false);
  const [deleteMessagesuccess, setdeleteMessagesuccess] = useState(false);
  //   const [completeMessage, setcompleteMessage] = useState(false)

  const [inputData, setinputData] = useState("");
  const [inputDesc, setinputDesc] = useState("");

  const [cmp, setcmp] = useState(false);

  const [items, setitems] = useState([
    {
      id: "001",
      name: " Task",
      desc: "Default Description",
      status: false,
    },
  ]);

  //   HANDLING INPUT FIELDS
  const handleInput = (e) => {
    setinputData(e.target.value);
  };
  const handleInputdesc = (e) => {
    setinputDesc(e.target.value);
  };
  //   HANDLING INPUT FIELDS

  //   SUBMITTING FORM
  const handleSubmit = (e) => {
    setshowList(true);
    setshowNew(true);

    e.preventDefault();
    if (!inputData || !inputDesc) {
      setshowNew(false);
      alert("fill data");
      // showList(false);
      // setshowform(false);

    } else if (inputData && !toggleSubmit) {
      setitems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData, desc: inputDesc };
          }
          return elem;
        })
      );

      setinputData("");
      setinputDesc("");
      settoggleSubmit(true);
      setshowform(false);
      setshowDelete(true);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
        desc: inputDesc,
      };
      setitems([allInputData, ...items]);
      setinputData("");
      setinputDesc("");
      setshowform(false);
    }
  };
  //   SUBMITTING FORM

  //   DELETE
  const handleDelete = (index) => {
    console.log(index);
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setdeleteMessage(true);

    setitems(updatedItems);
    setTimeout(() => {
      setdeleteMessage(false);
    }, 2000);
    setdeleteMessagesuccess(false);
  };
  //   DELETE

  //   EDIT
  const handleEdit = (id) => {
    setshowList(false);
    setshowDelete(false);
    setshowNew(false);
    setshowform(true);

    settoggleSubmit(false);
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setinputData(newEditItem.name);
    setinputDesc(newEditItem.desc);
    // setshowDelete(true)

    setisEditItem(id);
    console.log(newEditItem);
  };
  //   EDIT

  // ADD NEW TASK
  const handleAdd = () => {
    //   alert("hello")
    setshowform(true);
    setshowList(true);
    setshowNew(false);
  };
  // ADD NEW TASK

  // TOGGLE STATUS

  // const onTglStatus = (id) => {
  //   console.log("completing task - " + id);
  //   setitems(
  //     items.map((check) => {
  //       check.complete = id === check.id ? !check.complete : check.complete;
  //       return check;
  //       // setcmp(true)
  //     })
  //   );
  //   console.log(items)


  // };

  // TOGGLE STATUS

  return (
    <>
      {showNew ? (
        <div className="container">
          <div className="col-12 text-end">
            <button className="btn btn-primary " onClick={handleAdd}>
              Add New Task
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {showForm ? (
        <>
          <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
            <div className="row">
              <div className="text-center">
                <h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
              </div>
              <form className="col-12 p-2" onSubmit={handleSubmit}>
                <label htmlFor="title" className="my-2">
                  Enter Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title"
                  className="w-100 my-1 p-2"
                  onChange={handleInput}
                  value={inputData}
                />
                <label className="my-2" htmlFor="description">
                  Enter
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  className="w-100 my-1 p-2"
                  onChange={handleInputdesc}
                  value={inputDesc}
                />
                {/* <div className="text-center"> */}
                {toggleSubmit ? (
                  <button className="btn btn-primary my-2">Save</button>
                ) : (
                  <button className="btn btn-primary my-2">Update</button>
                )}
                {/* </div> */}
              </form>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {showList ? (
        <div className="container py-2 ">
          {cmp ? (
            <p className="text-center text-danger">Task Completed Successfully</p>
          ) : (
            ""
          )}


          {deleteMessage ? (
            <p className="text-center text-danger">Item Deleted Successfully</p>
          ) : (
            ""
          )}
          {editMessage ? (
            <p className="text-center text-danger">Item Edited Successfully</p>
          ) : (
            ""
          )}
          {/* {
                deleteMessagesuccess && !deleteMessage ? <p className="text-center">item deleted successfully</p> : ""
            } */}
          {items.map((elem, index) => {
            return (
              <div
                className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
                key={elem.id}
              >
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <div>
                    <h4>{elem.name}</h4>
                    <p>{elem.desc}</p>
                    {/* <h6>description</h6> */}
                  </div>
                  <div className="d-flex align-items-center">
                    {/* <button
                      className="button btn icon-only clear"
                      onClick={() => onTglStatus(elem.id)}
                      //   onClick={() => completeTodo(elem.id)}
                    >
                      {elem.complete && "✅"}
                      {!elem.complete && "⬜"}
                    </button> */}

                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => handleEdit(elem.id)}
                    >
                      Edit
                    </button>

                    {showDelete ? (
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => handleDelete(elem.id)}
                      >
                        Delete
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Todo;
