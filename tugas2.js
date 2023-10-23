const nama = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  const searchName = (keyword, limit, callback) => {
    try {
      if (typeof keyword !== "string") {
        throw new Error("input harus berupa string");
      }
      if (typeof limit !== "number") {
        throw new Error("input harus berupa angka");
      }
  
      const result = nama.filter((x) => x.toLowerCase().includes(keyword.toLowerCase()));
      callback(result.slice(0, limit));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const callback = (result) => {
    console.log(result);
  };
  
  searchName("an", 3, callback);
  searchName(123, "two", callback);