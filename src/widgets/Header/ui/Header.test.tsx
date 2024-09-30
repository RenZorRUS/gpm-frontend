import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
    test("Test render", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );
        expect(screen.getByTestId("Header")).toBeInTheDocument();
    });

    test("Test render with active profile link style", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );
        const profileLink = screen.getByTestId("ProfileLink");

        expect(profileLink).toBeInTheDocument();
        expect(profileLink).not.toHaveClass("active");

        fireEvent.click(profileLink);

        expect(profileLink).toBeInTheDocument();
        expect(profileLink).toHaveClass("active");
    });
});
