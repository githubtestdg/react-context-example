export default function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("author", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("author");
      return {
        ...state,
        user: false,
      };
  }
}
