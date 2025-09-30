import { render, screen, fireEvent, waitFor  } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router-dom"; // <- Burayı ekledik
import BannerSection from "./BannerSection";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

describe("Banner section", () => {
  it("renders Chicago heading", () => {
    render(
      <BrowserRouter>
        <BannerSection />
      </BrowserRouter>
    );

    // Chicago başlığını test ediyoruz
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });

  it("navigates to booking page when Reserve a Table is clicked", async () => {
    render(
      <BrowserRouter>
        <BannerSection />
        <BookingForm />
      </BrowserRouter>
    );

    const links = screen.getAllByTestId("reserve-table-link");
    await userEvent.click(links[0]);

    // Asenkron olarak sayfa değişimini bekle
    expect(screen.getByText("Book a Table")).toBeInTheDocument();
  });


  //
  //
  it("should submit the form successfully and show success message", async () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    // Step 1 alanlarını doldur
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "Alper" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Tanrıkulu" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "alper@example.com" },
    });

    // Continue butonuna bas
    fireEvent.click(screen.getAllByText(/Continue/i)[0]);

    // Step 2 alanlarını doldur
    fireEvent.change(screen.getByLabelText(/Choose Date/i), {
      target: { value: "2026-12-31" }, // gelecekte bir tarih
    });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), {
      target: { value: "16:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "birthday" },
    });

    // Submit butonuna bas
    fireEvent.click(screen.getByText(/Submit/i));

    // Başarılı submit sonrası success mesajı gelmeli
    await waitFor(() => {
      expect(screen.getByTestId("submit-success")).toBeInTheDocument();
    });
  });
});
