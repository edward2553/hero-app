const { render, screen, fireEvent } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { AuthContext } = require("../../../src/auth/context/AuthContext");
const { Navbar } = require("../../../src/UI/components/Navbar");

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Pruebas en el <Navbar />", () => {
  const appContext = {
    logged: true,
    user: {
      id: "ABC",
      name: "Bob marley",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el nombre del usuario", () => {
    render(
      <AuthContext.Provider value={appContext}>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const span = screen.getByTestId("username");
    expect(span.innerHTML).toBe(appContext.user.name);
  });

  test("Debe de llamar el logout y el navigate cuando se hace click en el boton", () => {
    render(
      <AuthContext.Provider value={appContext}>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const button = screen.getByTestId("logOutButton");
    fireEvent.click(button);
    expect(appContext.logout).toBeCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
