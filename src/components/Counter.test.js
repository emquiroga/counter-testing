import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"


describe("Testing component Counter", () => {
  
    beforeEach(()=> {
        render(<Counter />)
    })

    it("First snapshot", () => {
        expect(screen.getByRole("counter")).toMatchSnapshot();
    })

    it('Testing title and state rendering', () => {
        expect(screen.getByText("Counter: 0").tagName).toBe("H2");
    })
    it('Checking handleAdd function to work properly', () => {
        fireEvent.click(screen.getByLabelText("add"));
        expect(screen.getByRole("counter").textContent).toContain("Counter: 1");
    })
    it('Checking handleRest function to work properly', () => {
        userEvent.click(screen.getByLabelText("rest"));
        expect(screen.getByRole("counter").textContent).toContain("Counter: -1");
    })
    it('Simulating that someone is using the app', () => {
        const btnAdd = screen.getByLabelText("add");
        const btnRest = screen.getByLabelText("rest");

        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);

        expect(screen.getByRole("counter").textContent).toContain("Counter: 7");

        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);
        userEvent.click(btnRest);

        expect(screen.getByRole("counter").textContent).toContain("Counter: -4");

    })
    it('Testing reset button', () => {
        const btnAdd = screen.getByLabelText("add");

        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);
        userEvent.click(btnAdd);

        userEvent.click(screen.getByLabelText("reset"));

        expect(screen.getByRole("counter").textContent).toContain("Counter: 0")

    })
})
