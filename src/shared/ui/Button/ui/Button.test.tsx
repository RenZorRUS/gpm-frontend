import { Button, ButtonTheme } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
    test("Test render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("Test render with theme class", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
