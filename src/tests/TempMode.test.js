import React from "react";
import TempMode from "../components/TempMode";
import Radio from "@material-ui/core/Radio";
import {
    createMount,
} from "@material-ui/core/test-utils";

describe("<TempMode />", () => {
    it("simulates click on radio", () => {
        const mount = createMount();
        const wrapper = mount(<TempMode />);
        const radio = wrapper.find(Radio).last();
        radio.simulate("click");
        expect(radio.props().checked).toBe(true);
    });
})