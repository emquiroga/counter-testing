const { render, screen } = require("@testing-library/react")
const { default: ButtonCounter } = require("./ButtonCounter")

describe('<ButtonCounter /> Tests', () => {
    const actionAdd = jest.fn()
    beforeEach(() => {
        render(<ButtonCounter value={3} name="add" action={actionAdd} />)
    })
    it('First snapshot', ()=> {
        expect(screen.getByLabelText("add")).toMatchSnapshot();
    })
    it('Creates a button properly? (Case add counter)', () => {
        expect(screen.getByLabelText("add")).toBeInTheDocument()
    })
    it('Creates a button properly without default value? (Case rest counter)', () => {
        render(<ButtonCounter name="rest" action={actionAdd} />)
        expect(screen.getByLabelText("rest")).toBeInTheDocument()
    })
})