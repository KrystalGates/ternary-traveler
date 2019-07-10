const API = {
    getData(entity, id) {
      if (id) {
        return fetch(`http://localhost:8088/${entity}/${id}`)
        .then(response =>response.json())
      }
      return fetch(`http://localhost:8088/${entity}`)
      .then(response => response.json())
    },
    addData(entity, object) {
      return fetch(`http://localhost:8088/${entity}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      });
    },
      deleteData(entity, id) {
      return fetch(`http://localhost:8088/${entity}/${id}`, {
        method: "Delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      });
    },
    editData(entity, object){
      return fetch(`http://localhost:8088/${entity}/${object.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    });
    }
  };

  export{API}