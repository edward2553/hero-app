const { render, screen, fireEvent } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { SearchHero } = require("../../../src/heroes/pages/SearchHero");

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe("Pruebas en SearchPage", () => {

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrarse correctamemte con valores por defecto", () => {
    const {container} = render(
      <MemoryRouter>
        <SearchHero />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar a Batman y el input con el valor del queryString", () => {
    
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchHero />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman')

    const img = screen.getByRole('img');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
  });

  test("Debe de mostrar un error si no se encuentra un heroe", () => {
    
    render(
      <MemoryRouter initialEntries={['/search?q=notfound']}>
        <SearchHero />
      </MemoryRouter>
    );

    const divErrorMessage = screen.getByTestId('search-error-message').innerHTML;
    expect(divErrorMessage).toContain('No hero with <b>notfound</b>');
  });

  test("Debe de llamar el navigate con los argumentos de busqueda", () => {
    
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchHero />
      </MemoryRouter>
    );

    const input = screen.getByTestId('searchInput');
    const form = screen.getByTestId('searchForm');

    fireEvent.change(input, {target: {value: 'batman'}});
    fireEvent.submit(form);
    
    expect(mockUseNavigate).toHaveBeenCalledWith('?q=batman');
  });

});
