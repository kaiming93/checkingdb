exports.createList = listData => {
    return listData.map(list => {
      return {
        name: list.name,
        checking: list.checking,
        checkout: list.checkout,
        created_at: list.created_at, 
      };
    });
  };

  exports.createUser = userData => {
    return userData.map(user => {
      return {
        name: user.name,
        object: user.object,
        created_at: user.created_at, 
      };
    });
  };