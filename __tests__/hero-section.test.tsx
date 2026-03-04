import { render, screen } from "@testing-library/react";
import HeroSection from "../src/components/HeroSection";

describe("HeroSection", () => {
  it("renders the main heading with the developer name", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", { name: /hi, i'm elkin!/i })
    ).toBeInTheDocument();
  });
});

