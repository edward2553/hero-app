import { authReducer, types } from "../../../src/auth";


describe("Pruebas en AuthReducer.js", () => {

  const defaultState = {
    logged: false,
    user: null,
  }

  let state = defaultState;

  beforeEach(() => {
    state = defaultState;
  })

  test("Debe retornar el estado por defecto", () => {
    const stateReturned = authReducer(state, {});
    expect(stateReturned).toBe(state);
  });

  test("Debe de llamar al login y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: 'John Smith', 
      }
    }
    const stateReturned = authReducer(state, action);
    state.logged = true;
    state.user = action.payload;
    expect(stateReturned).toStrictEqual(state);
  });

  test("Debe de (logout) borrar el name del usuario y logged en false", () => {
    const action = {
      type: types.logout
    }
    const stateReturned = authReducer(state, action);
    state.logged = false;
    state.user = null;
    expect(stateReturned).toStrictEqual(state);
  });

});
