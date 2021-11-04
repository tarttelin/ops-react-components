import React from "react";
import { render, within } from "@testing-library/react";
import dayjs from "dayjs";

import Calendar from "./Calendar";

describe("Calendar component", () => {

    const renderComponent = (date: Date) => render(<Calendar date={date} />);

    it("Should have 35 cells for a short month", () => {
        const { queryAllByTestId } = renderComponent(dayjs("2021-11-01").toDate());

        expect(queryAllByTestId("calendar-cell")).toHaveLength(35);
    });

    it("Should have 42 cells for a long month", () => {
        const { queryAllByTestId } = renderComponent(dayjs("2021-10-01").toDate());

        expect(queryAllByTestId("calendar-cell")).toHaveLength(42);
    });

    
})