exports.createList = listData => {
    return listData.map(list => {
      return {
        name: list.name,
        created_at: list.created_at, 
      };
    });
  };

  exports.createUser = userData => {
    return userData.map(user => {
      return {
        object: user.object,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        created_at: user.created_at,
      };
    });
  };